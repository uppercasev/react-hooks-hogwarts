function Filter({ handleFilter, selectedFilter }) {
  return (
    <>
      <span>  Filter by: </span>
      <select name="greased" onChange={handleFilter} value={selectedFilter}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="not greased">Not greased</option>
      </select>
    </>
  );
}

export default Filter;
