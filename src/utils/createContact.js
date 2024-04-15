import { nanoid } from "nanoid";

export const createContact = (name, number) => {
  return {
    id: nanoid(),
    name: name,
    number: number,
  };
};
