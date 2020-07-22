import React, { Component } from 'react';
import "./List.css";

class List extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="list">
                  <h2 className="list_title">{this.props.todolist.title}</h2>
            </section>
        );
    }
}
 
export default List;