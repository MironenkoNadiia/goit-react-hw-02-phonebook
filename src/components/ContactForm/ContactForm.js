import React, { Component } from "react";
// import Button from "./Button";
// import Input from "./Input";

export default class ContactForm extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleInputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact(this.state.name);

    this.setState({ name: "" });
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
            onChange={this.handleInputChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
