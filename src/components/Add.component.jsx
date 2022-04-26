import React from "react";
import "./Add.style.css";
import AddItem from "./AddItem.component";

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: "",
    };
  }
  inputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  addTodo = () => {
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, this.state.input],
      };
    });
    this.setState({
      input: "",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="add-todo">
          <input
            type="text"
            placeholder="New Task"
            onChange={this.inputHandler}
            value={this.state.input}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <div className="todos">
          {this.state.todos.map((todo, index) => {
            return <AddItem key={index} todo={todo} />;
          })}
          {this.state.todos.length === 0 && (
            <div className="center"></div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Add;