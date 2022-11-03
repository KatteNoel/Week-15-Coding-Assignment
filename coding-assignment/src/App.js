import React, { Component } from "react";
import { ToDoList } from "./components/todolist";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ToDoList />
      </div>
    );
  }
}

export default App;
