import React from "react";

import { createContact } from "../../utils/index";

export class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleChang = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value.trim() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const { addContact } = this.props;

    addContact(createContact(name, number));

    this.resetForm();
  };

  resetForm = () => this.setState({ name: "", number: "" });

  render() {
    const { name, number } = this.state;

    return (
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

        <button type="submit" onClick={this.handleSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}
