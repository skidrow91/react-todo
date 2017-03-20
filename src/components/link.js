import React, { Component} from "react";
import {handleStatus} from "../actions/index";
import {connect} from "react-redux";

class Link extends Component{	
	handleCompleted(){
		if(this.props.status == "completed")
			this.props.handleStatus(this.props.id, "open");
		else	
			this.props.handleStatus(this.props.id, "completed");
    }

    handleDeleted(){
    	this.props.handleStatus(this.props.id, "deleted");
    }

    loadImage(){    	
    	return (
    			<img src={require("../assets/images/erase.png")} width="16" height="16" />
    		)
    }

    isCompleted(){
    	if(this.props.status == "completed"){
    		return true;
    	}
    	return false;
    }  

	render(){
		//console.log(this.props.name);
		// this.loadImage();
		return (
			<div>
				<input type="checkbox" onChange={this.handleCompleted.bind(this)} checked={this.isCompleted()}/>
				<a href="javascript:void(0)" onClick={this.handleCompleted.bind(this)}>
                	{this.props.name}                	           	
            	</a>
            	<a href="javascript:void(0)" onClick={this.handleDeleted.bind(this)}>
            		{this.loadImage()}
            	</a>
			</div>			
		)
	}
}

// function mapStateToProps(state){	
// 	return {
// 		state
// 	}
// }

function mapDispatchToProps(dispatch){
	return {
		handleStatus: (id, status) => dispatch(handleStatus(id, status))
	}
}

export default connect(null, mapDispatchToProps)(Link);