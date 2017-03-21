import React, { Component } from 'react';
import Link from './link';
import {connect} from "react-redux";

class ListTodo extends Component{
    constructor(props){
        super(props);
    }

    condition(item, status){
        switch (status){
            case "completed":                
                return item.status == "completed";
            case "open":                
                return item.status == "open";
            default:                
                return item.status == "completed" || item.status == "open";
        }
    }

    renderList(){
        const {items} = this.props.state.items.item
        const {status} = this.props.state.items.item;        
        return(
            <ul>
            {
                items.filter(item => this.condition(item, status)).map(item => {
                    return(
                        <li key={item.id}>
                            <Link name={item.value} id={item.id} status={item.status}/>                        
                        </li>
                    )                    
                })
            }
            </ul>
        )
    }

    render(){
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log(state);
    return {
        state
    }
}

export default connect(mapStateToProps, null)(ListTodo);
