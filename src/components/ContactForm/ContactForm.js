import React, { Component } from "react";
// import Button from "./Button";
// import Input from "./Input";

export default class ContactForm extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleNumberChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact(this.state.name,this.state.number);

    this.setState({ name: "" , number:''});
  };

  render() {
    return (
      <div>
        <h2>Name</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Number</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="number"
            placeholder="number"
            value={this.state.number}
            onChange={this.handleNumberChange}
          />
        </form>
      </div>
    );
  }
}
