import React, {Component} from 'react';
import AddTodo from './addTodo';
import ListTodo from './listTodo';
import VisibleTodo from './visibleTodo';

class Index extends Component{
    render(){
        return (
            <div>
                <AddTodo />
                <ListTodo />
                <VisibleTodo />              
            </div>
        )
    }
}

export default Index;
