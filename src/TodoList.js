import React, { Component } from 'react';
import axios from 'axios';
import List from "./List";


class TodoList extends Component {
    state = { 
        todolists : []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            this.setState ({
                todolists: res.data
            })

        })
        
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title : "hello",
            completed: false,
            userId: 50
        })
        .then(res => {
            this.setState( {
                todolists : [...this.state.todolists, res.data] 
            })
        })
    }

    render() { 

        let todolistEl= this.state.todolists.map(todolist => {
            return <List todolist={todolist}/>
        })

        return ( 
            <div className="liste">
                {todolistEl}
            </div>
        );
    }
}
 
export default TodoList;