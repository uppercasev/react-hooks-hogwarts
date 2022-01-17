import { useState } from "react";

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <div>
      <select name="greased" onChange={handleChange} value={selectedFilter}>
        <option>[Filter by]</option>
        <option>Greased</option>
        <option>Not greased</option>
      </select>
    </div>
  );
}

export default Filter;
