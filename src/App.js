import React, { Component } from 'react';
import TodoList from "./TodoList";

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Liste">
        <TodoList/>
      </div>
     );
  }
}
 
export default App;
