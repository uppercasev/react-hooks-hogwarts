function Sort({ handleSort, selectedSort }) {
  return (
    <>
      <span>  Sort by: </span>
      <select name="sort" onChange={handleSort} value={selectedSort}>
        <option value="none">None</option>
        <option value="alphabetical">Name (A to Z)</option>
        <option value="reverse">Name (Z to A)</option>
        <option value="ascending">Weight (ascending)</option>
        <option value="descending">Weight (descending)</option>
      </select>
    </>
  );
}

export default Sort;