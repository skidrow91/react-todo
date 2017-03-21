import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toDo} from '../actions/index';
import ListTodo from './listTodo';
import VisibleTodo from './visibleTodo';

class addTodo extends Component{

    handleClick(){
        this.props.addTodo(this.state.todo);
    }    

    listTodo(){        
        const {items} = this.props.state.items.item;
        const {status} = this.props.state.items.item;        
        if(status == "completed"){
            items.filter(item => item.status == "completed");
        }        
        return items;
    }

    render(){        
        return (
            <div>
                <input ref="todo" onChange={event => this.setState({todo: event.target.value})}/>
                <button onClick={this.handleClick.bind(this)}>Add</button>                            
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        addTodo: (val) => dispatch(toDo(val))
    }
}

export default connect(null, mapDispatchToProps)(addTodo);
