function TileDetails({ hog, showDetails }) {
  return (
    <>
      <div class="content">
        <div class="header">{hog.name}</div>
        {showDetails && (
          <>
            <div class="meta">
              <a>{hog["highest medal achieved"].toUpperCase()}</a>
            </div>
            <div class="description">{hog.specialty}.</div>
          </>
        )}
      </div>
      {showDetails && (
        <div class="extra content">
          <span class="right floated">Weight: {hog.weight}kg</span>
          <span class="left floated">
            Greased: {hog.greased ? "Yes" : "No"}
          </span>
        </div>
      )}
    </>
  );
}

export default TileDetails;
