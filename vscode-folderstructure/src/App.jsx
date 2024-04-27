import { useState } from "react";
import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/folderdata";
function App() {
  return (
    <div className="app">
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
