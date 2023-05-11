import React, { Component } from "react";
import TodoItems from "./Components/TodoItems/TodoItems";
import AddItem from "./Components/AddItem/AddItem";

export class App extends Component {
  state = {
    items: [
      { id: 1, name: "Hamza", age: 22 },
      { id: 2, name: "Mohammed", age: 23 },
      { id: 3, name: "Ahmed", age: 24 },
    ],
  };
  deleteItem = (id) => {
    // let items = this.state.items;
    // let i = items.findIndex((item) => item.id === id);
    // items.splice(i, 1);
    // this.setState({ items });
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
