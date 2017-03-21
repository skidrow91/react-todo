import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toDo} from '../actions/index';
import ListTodo from './listTodo';
import VisibleTodo from './visibleTodo';
import { Grid, Row, Col, Button, ButtonToolbar, FormControl } from 'react-bootstrap';

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
            <Grid>                                
                <Row>
                    <Col xs={8} md={5}>                        
                        <FormControl type="text" ref="todo" placeholder="Enter text" onChange={event => this.setState({todo: event.target.value})} />
                    </Col>
                    <Col xs={4} md={3}>
                        <ButtonToolbar>                        
                            <Button bsStyle="xsmall" onClick={this.handleClick.bind(this)}>Add</Button>
                        </ButtonToolbar>    
                    </Col>
                </Row>
            </Grid>        
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        addTodo: (val) => dispatch(toDo(val))
    }
}

export default connect(null, mapDispatchToProps)(addTodo);
