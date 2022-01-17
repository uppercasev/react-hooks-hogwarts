function Filter({ handleFilter, selectedFilter}) {
  return (
    <div>
      <select name="greased" onChange={handleFilter} value={selectedFilter}>
        <option value="all">[Filter by]</option>
        <option value="greased">Greased</option>
        <option value="not greased">Not greased</option>
      </select>
    </div>
  );
}

export default Filter;
