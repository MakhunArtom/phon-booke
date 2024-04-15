export const filterContacts = (contacts, searchValue) => {
  if (searchValue === "") {
    return contacts;
  }

  const value = searchValue.toLowerCase();

  return contacts.filter(({ name }) => {
    return name.toLowerCase().includes(value);
  });
};
