import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import nextId from "react-id-generator";
import Filter from "./components/Filter";
// import ContactList from "./components/ContactList";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (name, number) => {
    const contact = {
      id: nextId(),
      name,
      number,
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <h3>Contacts by name</h3>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {contacts.length > 0 && <ContactList contacts={visibleContacts} />}
      </div>
    );
  }
}
