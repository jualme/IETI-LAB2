import React from 'react';
import {TodoList} from "./TodoList";
import moment from "moment";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';



export class TodoApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: moment(date.target.value)
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

    render() {

        return (
            <div className="Todo">

                <div className="todo-form">
                    <h3>New TODO</h3>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="text">Text:</InputLabel>
                        <Input id="text" name="text"
                               autoComplete="text" autoFocus
                               value={this.state.text}
                               onChange = {this.handleTextChange} />
                    </FormControl>

                    <br/>
                    <br/>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="priority">Priority:</InputLabel>
                        <Input id="priority" name="priority"
                               autoComplete="priority" autoFocus
                               value={this.state.priority}
                               onChange = {this.handlePriorityChange} />
                    </FormControl>

                    <br/>
                    <br/>
                    <TextField
                        id="date"
                        label="Due date"
                        type="date"
                        defaultValue="2020-01-01"
                        InputLabelProps={{shrink: true,required: true}}
                        onChange={this.handleDateChange}
                        fullWidth
                    />

                    <br/>
                    <Divider variant="fullWidth"/>
                    <br/>
                    <br/>
                    <Button type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            onClick={this.handleSubmit}>
                        Add
                    </Button>
                </div>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div>
        );
    }

}