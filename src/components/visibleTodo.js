import React, { Component } from "react";
import {connect} from "react-redux";
import {visibleTodo} from "../actions/index";

class VisibleTodo extends Component{
	constructor(props, dispatch){
		super(props);
	}

	handleClick(status){
		// console.log(status);
		// this.props.filterTodo(status);
		this.props.dispatch(visibleTodo(status));
	}

	render(){
		return (
			<div>
				<a href="javascript:void(0)" onClick={this.handleClick.bind(this, "completed")}>All</a>
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

export default connect()(VisibleTodo);