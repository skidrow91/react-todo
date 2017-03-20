import React, { Component } from 'react';
import Link from './link';

export default class ListTodo extends Component{
    constructor(props){
        super(props);
    }

    renderList(){
        const {items} = this.props
        // console.log(items);
        return(
            <ul>
            {
                items.filter(item => item.status != "deleted").map(item => {
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
