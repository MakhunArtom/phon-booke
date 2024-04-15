import { Contact } from "../index";

import { isExist, filterContacts } from "../../utils/index";

export const ContactsList = ({ contacts, filterValue }) => {
  return (
    <ul>
      {isExist(contacts) &&
        filterContacts(contacts, filterValue).map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} />
        ))}
    </ul>
  );
};
