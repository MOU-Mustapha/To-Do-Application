import React, { Component } from "react";

export class AddItem extends Component {
  state = {
    name: "",
    age: "",
  };
  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    if (e.target.name.value !== "" && e.target.age.value !== "") {
      this.props.addItem(this.state);
      this.setState({
        name: "",
        age: "",
      });
    } else {
      return false;
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type="text"
            placeholder="Enter Name..."
            id="name"
            onChange={this.change}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Enter Age..."
            id="age"
            onChange={this.change}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddItem;
