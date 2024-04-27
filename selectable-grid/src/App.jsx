import "./App.css";
import SelectableGrid from "./components/SelectableGrid";

function App() {
  return (
    <div className="main-container">
      <h1>Selectable grid</h1>
      <SelectableGrid rows={10} cols={10} />
    </div>
  );
}

export default App;
