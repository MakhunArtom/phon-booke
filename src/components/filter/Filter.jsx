export const Filter = ({ searchValue, filterValue }) => {
  return (
    <label>
      <input name="filter" value={filterValue} onChange={searchValue} />
    </label>
  );
};
