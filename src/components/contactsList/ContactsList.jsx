import { Contact } from "../index";

import { isExist, filterContacts } from "../../utils/index";

export const ContactsList = ({ contacts, filterValue, deletContact }) => {
  return (
    <ul>
      {isExist(contacts) ? (
        filterContacts(contacts, filterValue).map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deletContact={deletContact}
          />
        ))
      ) : (
        <p>This no contact</p>
      )}
    </ul>
  );
};
