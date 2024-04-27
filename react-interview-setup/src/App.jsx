import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountrySelector from "./pages/CountrySelector";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* <h1>RoadsideCoder Store</h1>
        <Breadcrumbs />
        <hr /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/countryselector" element={<CountrySelector />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
