export const Contact = ({ id, name, number, deletContact }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>

      <button type="button" onClick={() => deletContact(id)}>
        delet
      </button>
    </li>
  );
};
