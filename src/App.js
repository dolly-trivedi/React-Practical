import "./App.css";
import Counter from "./Component/Simplecounter";

function App() {
  let name = "Dolly";
  return (
    <div className="App">
      <Counter name={name} />
    </div>
  );
}

export default App;
