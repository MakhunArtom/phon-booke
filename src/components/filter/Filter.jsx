export const Filter = ({ searchValue, filterValue }) => {
  return (
    <label>
      Filter contact by name
      <input name="filter" value={filterValue} onChange={searchValue} />
    </label>
  );
};
