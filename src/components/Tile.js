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
        <img
          src={hog.image}
          alt={hog.name}
          onError={(event) => {
            event.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";
            event.onerror = null;
          }}
        />
      </div>
      <TileDetails hog={hog} showDetails={showDetails} />
    </div>
  );
}

export default Tile;
