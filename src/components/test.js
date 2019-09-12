import React, { Component } from 'react';
class test extends Component {



    componentDidMount() {
        fetch('http://localhost:3000/list')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todos: data })
                console.log(this.state.todos)
            })
            .catch(console.log)
    }
    state = {
        todos: []

        // comment4


    }

    posttolist() {

        // comment2

        let task = document.getElementById("task").value;

        let e = document.getElementById("pri");
        let urg = e.options[e.selectedIndex].value;

        if (task == null) {
            alert("Task Empty");


        }
        else {



            alert("Task Added");

            //console.log('method called');

            return fetch('http://localhost:3000/list', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    task: task,
                    priority: urg,
                }),


            },
                window.location.reload(true)
            );


        }





    }
    deleteFromList(e, id) {

        //comment1
        alert("deleted");



        return fetch('http://localhost:3000/list/' + id, {
            method: 'DELETE',


        },
            window.location.reload(true));



    }

    updateItem(e, id) {
        let task = document.getElementById("task").value;

        let ex = document.getElementById("pri");
        let urg = ex.options[ex.selectedIndex].value;


        alert("updated");

        // comment3


        return fetch('http://localhost:3000/list/' + id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                task: task,
                priority: urg,
            }),


        },
            window.location.reload(true));




    }


    render() {
        return (
            // comment 5
            <div className="container">

                <div className="col-xs-6">

                    <h3 className="col-sm-3">Enter task</h3>

                    <input className="col-sm-2" id="task"
                        type="text"

                    />

                    <div>

                        <span>


                            <h3 className="col-sm-3"> Select priority </h3>
                            <select className="dropdown-header" id="pri"

                                name="pri">
                                <option value="High">High</option>
                                <option value="Normal">Normal</option>
                                <option value="Low">Low</option>

                            </select>
                        </span>
                    </div>

                    <button
                        onClick={this.posttolist}

                        className="btn btn-info btn-sm"
                    > Create New To Do </button>

                </div>
                <div className="col-xs-12">
                    <h1>To Do List </h1>
                    {this.state.todos.map((todo) => (
                        <div className="card" key={todo.id}>
                            <div className="card-body">
                                <h5 className="card-title">{todo.task}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {
                                        <span>
                                            {todo.priority}
                                        </span>
                                    }

                                </h6>
                                <div key={todo.id}>
                                    <button
                                        onClick={(e) => { this.deleteFromList(e, todo.id) }}

                                        className="btn btn-outline-danger btn-sm"
                                    > Delete </button>
                                    <button
                                        onClick={(e) => { this.updateItem(e, todo.id) }}

                                        className="btn-outline-primary btn-sm"
                                    > Update </button>
                                </div>



                            </div>
                        </div>
                    ))}
                </div>





            </div>



        );
    }
}

export default test;