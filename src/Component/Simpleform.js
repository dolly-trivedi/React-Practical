function Simpleform() {
  return (
    <div className="App">
      <br />
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br /> <br />
        <label>
          Email:
          <input type="text" />
        </label>
        <br /> <br />
        <label>
          Phone Number:
          <input type="text" />
        </label>
        <br /> <br />
        <label>
          Address:
          <textarea></textarea>
        </label>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Simpleform;
