import { React, useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import Filter from "./Filter";
import hogs from "../porkers_data";


function App() {
  const [hogsToDisplay, setHogsToDisplay] = useState(hogs);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilter = (event) => {
    const filtered = event.target.value;
    setSelectedFilter(filtered);
    if (filtered === "greased") {
      setHogsToDisplay(hogs.filter((hog) => hog.greased === true))
    } else if (filtered === "not greased") {
        setHogsToDisplay(hogs.filter((hog) => hog.greased === false))
    } else {
      setHogsToDisplay(hogs);
    }
  }

  return (
    <div className="App">
      <Nav />
      <Filter handleFilter={handleFilter} selectedFilter={selectedFilter}/>
      <div class="ui link cards">
        {hogsToDisplay.map((hog) => {
          return (
          <Tile hog={hog}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
