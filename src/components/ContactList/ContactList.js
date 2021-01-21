import React from 'react';



const ContactList = ({contacts}) => {
    return (
        <ul>
            
            {contacts.map(({ id, name }) => {
                return (
                  <li>
                    <p>
                      {name}
                    </p>
                  </li>
                );
                
            })}
        </ul>
    );
};


export default ContactList;