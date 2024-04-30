import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
