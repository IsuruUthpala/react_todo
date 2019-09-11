import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';

import * as serviceWorker from './serviceWorker';
import ToDoList from "./components/ToDoList";

import Task from "./components/task";
import Test from "./components/test";


const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/ToDoList">To Do List</Link>
                </li>
                <li>
                    <Link to="/task">Create New To Do</Link>
                </li>
                <li>
                    <Link to="/test">test json</Link>
                </li>

            </ul>



            <Route path="/ToDoList" component={ToDoList} />
            <Route path="/task" component={Task} />
            <Route path="/test" component={Test} />

        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
