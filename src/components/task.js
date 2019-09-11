import React, { Component } from 'react';
import { setStorage } from '../wrappers/storage';

//import Storage from './wrappers/storage'
class Task extends Component {




    constructor(props) {

        super(props);
        var parsedTodo = [];
        var parsedPriority = [];

        const list = window.localStorage.getItem('savedTasks');

        if (list != null) {
            parsedTodo = JSON.parse(list);

        }


        // console.log(parsedTodo);



        const pri = window.localStorage.getItem('savedPriority');

        if (pri != null) {
            parsedPriority = JSON.parse(pri);
        }



        //console.log(parsedPriority);

        this.state = {


            userInput: '',
            urgency: 'normal',
            list: parsedTodo,
            priority: parsedPriority
        }

    }
    changeUserInput = (e) => this.setState({ userInput: e.target.value });


    addToList(input) {

        let e = document.getElementById("pri");
        let urg = e.options[e.selectedIndex].value;

        let listArray = this.state.list;
        let priorityArray = this.state.priority;
        listArray.push(input);
        priorityArray.push(urg);
        this.setState({

            list: listArray,


            userInput: ''
        }, () => {


            setStorage('savedPriority', this.state.priority);
            setStorage('savedTasks', this.state.list);

            //window.localStorage.setItem('savedPriority', JSON.stringify(this.state.priority));
            //window.localStorage.setItem('savedTasks', JSON.stringify(this.state.list));
            window.location.replace("/ToDoList");

        });





    }

    render() {
        return (

            <div className="to-do-list-main">
                <h1>To Do List</h1>
                <h5> Enter Task</h5>

                <input value={this.state.userInput}
                    type="text"

                    onChange={this.changeUserInput}
                />

                <h6> Select priority </h6>
                <select id="pri"

                    name="pri">
                    <option value="High">High</option>
                    <option value="Normal">Normal</option>
                    <option value="Low">Low</option>

                </select>

                {"\n"}
                <button
                    onClick={() => this.addToList(this.state.userInput)}

                    className="btn btn-secondary btn-sm"
                > Create New To Do </button>









            </div>


        )




    }
}

export default Task;