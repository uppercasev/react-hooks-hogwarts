import { React, useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import Filter from "./Filter";
import hogs from "../porkers_data";
import Sort from "./Sort";
import AddForm from "./AddForm";

function App() {
  const [hogsToDisplay, setHogsToDisplay] = useState(hogs);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const handleFilter = (event) => {
    const filtered = event.target.value;
    setSelectedFilter(filtered);
    if (filtered === "greased") {
      setHogsToDisplay(hogs.filter((hog) => hog.greased === true));
    } else if (filtered === "not greased") {
      setHogsToDisplay(hogs.filter((hog) => hog.greased === false));
    } else {
      setHogsToDisplay(hogs);
    }
  };

  const handleSort = (event) => {
    const orderedName = () =>
      hogsToDisplay.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

    const orderedWeight = () =>
      hogsToDisplay.sort((a, b) => {
        if (a.weight < b.weight) {
          return -1;
        }
        if (a.weight > b.weight) {
          return 1;
        }
        return 0;
      });

    const sortBy = event.target.value;
    setSelectedSort(sortBy);

    if (sortBy === "alphabetical") {
      setHogsToDisplay(orderedName());
    } else if (sortBy === "reverse") {
      setHogsToDisplay(orderedName().reverse());
    } else if (sortBy === "ascending") {
      setHogsToDisplay(orderedWeight());
    } else if (sortBy === "descending") {
      setHogsToDisplay(orderedWeight().reverse());
    } else {
      setHogsToDisplay([...hogsToDisplay]);
    }
  };

  const addHog = (newHog) => {
    setHogsToDisplay([newHog, ...hogsToDisplay]);
  };

  return (
    <div className="App">
      <Nav />
      <Sort handleSort={handleSort} selectedSort={selectedSort} />
      <Filter handleFilter={handleFilter} selectedFilter={selectedFilter} />
      <AddForm addHog={addHog} />
      <hr></hr>
      <div class="ui link cards">
        {hogsToDisplay.map((hog) => {
          return <Tile hog={hog} key={hog.name} />;
        })}
      </div>
    </div>
  );
}

export default App;
