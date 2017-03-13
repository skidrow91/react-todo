import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toDo} from '../actions/index';
import ListTodo from './listTodo';

class addTodo extends Component{

    constructor(props){
        super(props);
        this.state = {
            todo: "hello world"
        }
    }

    handleClick(){
        this.props.addTodo(this.state.todo);
    }

    // change(e){
    //     this.setState({ip: e.target.value});
    // }

    // listTodo(){
    //     const {list_items} = this.props;
    //     //console.log(this.state);
    //     // return(
    //     //     lists.map(list => {
    //             // return (
    //             //     <p>list.item</p>
    //             // )
    //             // console.log(list.item);
    //     //     })
    //     // );
    //     return list_items;
    // }

    render(){
        // console.log(this.listTodo());
        return (
            <div>
                <input ref="todo" onChange={event => this.setState({todo: event.target.value})}/>
                <button onClick={this.handleClick.bind(this)}>Add</button>
                <ListTodo items={this.props.state}/>
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
