import React, {Component} from 'react';
import AddTodo from './addTodo';
import ListTodo from './listTodo';
import VisibleTodo from './visibleTodo';
import { Grid, Row, Col } from 'react-bootstrap';

class Index extends Component{
    render(){
    	const elm = (
    		<Grid>
    			<Row>
    				<Col xs={12} md={12}>
    					<AddTodo />
    				</Col>
    			</Row>
    			<Row>
    				<Col xs={12} md={12}>
    					<ListTodo />
    				</Col>
    			</Row>
    			<Row>
    				<Col xs={12} md={12}>
    					<VisibleTodo />
    				</Col>
    			</Row>
    		</Grid>
    	)
    	return elm;
        {/*return (
            <div>
                <AddTodo />
                <ListTodo />
                <VisibleTodo />              
            </div>
        )*/}
    }
}

export default Index;
