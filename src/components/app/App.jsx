import React from "react";

import { ContactForm, ContactsList, Filter } from "../index";

export class App extends React.Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (contact) => {
    this.setState((preState) => {
      return {
        contacts: [...preState.contacts, contact],
      };
    });
  };

  getContact = (e) => {
    const { value } = e.target;

    this.setState({ filter: value.trim() });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filterValue={filter} searchValue={this.getContact} />
        <ContactsList contacts={contacts} filterValue={filter} />
      </div>
    );
  }
}
