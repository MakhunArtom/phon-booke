import React from "react";

import localStorege from "../../services/localstoreg";

import { ContactForm, ContactsList, Filter } from "../index";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorege.get("contacts");

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, preState) {
    const { contacts } = this.state;

    if (preState.contacts !== contacts) {
      localStorege.save("contacts", contacts);
    }
  }

  addContact = (contact) => {
    this.setState((preState) => {
      return {
        contacts: [...preState.contacts, contact],
      };
    });
  };

  deletContact = (id) => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
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
        <ContactsList
          contacts={contacts}
          filterValue={filter}
          deletContact={this.deletContact}
        />
      </div>
    );
  }
}
