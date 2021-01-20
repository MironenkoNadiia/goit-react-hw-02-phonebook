import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h2>Name</h2>
        <form>
          <Input name="name" placeholder="name" />
          <Button type='submit'>Add contact</Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
