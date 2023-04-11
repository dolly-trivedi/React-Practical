import "./App.css";
import Counter from "./Component/Counter";

function App() {
  let name = "Dolly";
  return (
    <div className="App">
      <Counter name={name} />
    </div>
  );
}

export default App;
