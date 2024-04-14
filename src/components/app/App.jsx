import React from "react";

import { nanoid } from "nanoid";

export class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleChang = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value.trim() });
  };

  createContact = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState((preState) => {
      return {
        contacts: [...preState.contacts, contact],
      };
    });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  getContact = (e) => {
    const { value } = e.target;

    this.setState({ filter: value.trim() });
  };

  isExist = () => (this.state.contacts.length > 0 ? true : false);

  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChang}
            />
          </label>

          <label>
            Phone number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChang}
            />
          </label>

          <button type="submit" onClick={this.createContact}>
            Add contact
          </button>
        </form>

        {this.isExist && (
          <ContactsList
            contacts={contacts}
            getContact={this.getContact}
            filterValue={filter}
          />
        )}
      </div>
    );
  }
}

const ContactsList = ({ contacts, getContact, filterValue }) => {
  const filterContacts = (contacts, searchValue) => {
    if (filterValue === "") {
      return contacts;
    }

    const value = searchValue.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(value);
    });
  };

  return (
    <div>
      <h2>Contacts</h2>

      <label>
        <input name="filter" value={filterValue} onChange={getContact} />
      </label>

      <ul>
        {filterContacts(contacts, filterValue).map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

const Contact = ({ name, number }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
};
