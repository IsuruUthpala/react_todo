import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { getStorage } from '../wrappers/storage';



class ToDoList extends Component {




    constructor(props) {

        super(props);
        let parsedTodo = [];
        let parsedPriority = [];

        // getStorage('savedTasks');

        // console.log(Store.getStorage('savedTasks'));


        //const list = window.localStorage.getItem('savedTasks');
        const list = getStorage('savedTasks');

        if (list != null) {
            parsedTodo = JSON.parse(list);

        }


        //  console.log(parsedTodo);






        //const pri = window.localStorage.getItem('savedPriority');

        const pri = getStorage('savedPriority');

        if (pri != null) {
            parsedPriority = JSON.parse(pri);
        }



        //console.log(parsedPriority);

        this.state = {


            userInput: '',
            urgency: 'normal',
            list: parsedTodo,
            priority: parsedPriority,

        }

    }









    renderList() {

        return (

            <div className="row" >

                <div className="col-sm-2"> <ul >
                    <h2> Task </h2>

                    {

                        this.state.list.map(tag => (
                            <li key={tag}>{tag}</li>
                        ))}
                </ul></div>

                <div className="col-sm-4">  <ul>

                    <h2> Priority</h2>

                    {this.state.priority.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul></div>

            </div>

        );

    }


    render() {
        return (

            <div className="to-do-list-main">
                <h1>To Do List</h1>



                {


                    this.renderList()
                }



            </div>





        );
    }
}

export default ToDoList;