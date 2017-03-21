import React, { Component } from "react";
import {connect} from "react-redux";
import {visibleTodo} from "../actions/index";

class VisibleTodo extends Component{
	constructor(props){
		super(props);
	}

	handleClick(status){		
		this.props.filterTodo(status);		
	}

	render(){
		return (
			<div>
				<a href="javascript:void(0)" onClick={this.handleClick.bind(this, "all")}>All</a>
				<a href="javascript:void(0)" onClick={this.handleClick.bind(this, "open")}>Open</a>
				<a href="javascript:void(0)" onClick={this.handleClick.bind(this, "completed")}>Completed</a>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return{
		filterTodo: (status) => dispatch(visibleTodo(status))
	}
}

export default connect(null, mapDispatchToProps)(VisibleTodo);