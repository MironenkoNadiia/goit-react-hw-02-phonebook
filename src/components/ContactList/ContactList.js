import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li>
            <p>{name}</p>
            <p>{number}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
