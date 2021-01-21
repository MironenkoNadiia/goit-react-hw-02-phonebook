
import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import nextId from "react-id-generator";
// import ContactList from "./components/ContactList";

export default class App extends Component {
  state = {
    contacts: [],
  }


  addContact = name => {
    const contact = {
      id: nextId(),
      name
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  render() {
  
    const { contacts } = this.state;

    return (
      <div>
        <ContactForm onAddContact={this.addContact} />
        <ContactList contacts={contacts} />
      </div>
    );
  };
} 