import { useState } from "react";
import TileDetails from "./TileDetails";

function Tile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div class="card" onClick={handleClick}>
      <div class="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <TileDetails hog={hog} showDetails={showDetails} />
    </div>
  );
}

export default Tile;
