import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toDo} from '../actions/index';
import ListTodo from './listTodo';
import VisibleTodo from './visibleTodo';

class addTodo extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         todo: "hello world"
    //     }
    // }

    handleClick(){
        this.props.addTodo(this.state.todo);
    }

    // change(e){
    //     this.setState({ip: e.target.value});
    // }

    listTodo(){
        // console.log(this.props.state);
        const {items} = this.props.state.items.item;
        const {status} = this.props.state.items.item;
        // console.log(status);
        if(status == "completed"){
            items.filter(item => item.status == "completed");
        }
        // return(
        //     items.filter(item => item.status == ).map(item => {
        //         return (
        //             <p>item.item</p>
        //         )
        //         console.log(item.item);
        //     })
        // );
        console.log(items);
        return items;
    }

    render(){        
        return (
            <div>
                <input ref="todo" onChange={event => this.setState({todo: event.target.value})}/>
                <button onClick={this.handleClick.bind(this)}>Add</button>
                <ListTodo items={this.listTodo()}/>
                <VisibleTodo /> 
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

function mapDispatchToProps(dispatch){
    return {
        addTodo: (val) => dispatch(toDo(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addTodo);
