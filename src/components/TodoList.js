import React from 'react';
import {Todo} from './Todo'
import Grid from '@material-ui/core/Grid';
import './Todo.css';

export class TodoList extends React.Component {

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            );
        });

        return (
            <div>
                <Grid container spacing={4} className="grid-container">
                    {todoList}
                </Grid >

            </div>
        );


    }

}