import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from "./components/TodoApp";
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from './components/Login'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
        localStorage.setItem("isLoggedIn",false);
        this.changeIsLoggedIn = this.changeIsLoggedIn.bind(this);
    }

    changeIsLoggedIn(){
        this.setState({ isLoggedIn : true });
        localStorage.setItem("isLoggedIn",true);
        console.log(localStorage.getItem("isLoggedIn"));
    }

    render() {
        const LoginView = () => (
            <Login changeIsLoggedIn = {this.changeIsLoggedIn} />
        );
        const TodoAppView = () => (
            <TodoApp/>
        );
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        {this.state.isLoggedIn && (<li><Link to="/todo">Todo</Link></li>)}
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            </Router>
        );
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
            dueDate: date
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

}

export default App;
