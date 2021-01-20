import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList";

const App=(props)=> {
 
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm  />

        <h2>Contacts</h2>
        {/* <ContactList />  */}
      </div>
    );
  }


export default App;
