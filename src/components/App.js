import React from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import Filter from "./Filter";
import hogs from "../porkers_data";


function App() {
  
   
  return (
    <div className="App">
      <Nav />
      <Filter />
      <div class="ui link cards">
        {hogs.map((hog) => {
          return (
          <Tile hog={hog}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
