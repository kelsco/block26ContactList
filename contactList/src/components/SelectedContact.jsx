import React, { useState, useEffect } from "react";
import App from "../App";


export default function SelectedContact({ selectedContactId, setSelectedContantactId }) {
    const [selectedContact, setSelectedContact] = useState(null);
    useEffect(() => {
        async function fetchContact() {
            try{
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                console.log('response: ', response);
                const result = await response.json();
                setSelectedContact(result);
                console.log('result: ', result);
            } catch (error) {console.error(error)

            }
        }
        fetchContact();
    }, []);
    return (selectedContactId ? (<div>
            <h2>{selectedContact.name}</h2>
            <p>{selectedContact.email}</p>
            <p>{selectedContact.address.street}</p>
            <p>{selectedContact.address.city}, {selectedContact.address.zipCode}</p>
            <button onClick={() => {location.reload()}}>Back to Contacts</button>
        </div>) : (<div>Select a Contact</div>));

};
