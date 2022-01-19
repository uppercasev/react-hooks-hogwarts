function AddForm({ addHog }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const hogDetails = {
      name: event.target.name.value,
      specialty: event.target.specialty.value,
      greased: event.target.greased.checked,
      weight: parseFloat(event.target.weight.value),
      "highest medal achieved": event.target.medal.value,
      image: event.target.image.value,
    };
    addHog(hogDetails);
    event.target.name.value = "";
    event.target.specialty.value = "";
    event.target.greased.checked = false;
    event.target.weight.value = "";
    event.target.medal.value = "GOLD";
    event.target.image.value = "";
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Add new hog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <br></br>
        <input
          type="text"
          id="specialty"
          name="specialty"
          placeholder="Specialty"
          required
        />
        <br></br>
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="Weight"
          step="0.1"
          required
        />
        <br></br>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="Image URL"
          required
        />
        <br></br>
        <label for="medal">Medal </label>
        <select name="medal" id="medal">
          <option value="gold">GOLD</option>
          <option value="silver">SILVER</option>
          <option value="bronze">BRONZE</option>
        </select>
        <br></br>
        <label for="greased">Greased </label>
        <input type="checkbox" id="greased" name="greased" />
        <br></br>
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}

export default AddForm;
