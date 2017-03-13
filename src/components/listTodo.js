import React, { Component } from 'react';

export default class ListTodo extends Component{
    constructor(props){
        super(props);
    }

    renderList(){
        const {items} = this.props.items
        console.log(items);
        return(
            <ul>
            {
                items.map(item => {
                    return(
                        <li key={item.id}>{item.value}</li>
                    )
                    // console.log(item.value);
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
