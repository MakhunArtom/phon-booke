export const contactIsExist = (constacts, name) => {
  const newContact = name.toLowerCase();

  for (const contact of constacts) {
    if (contact.name.toLowerCase() === newContact) {
      alert("This contact name is exist pleas enter other neam");

      return true;
    }
  }

  return false;
};
