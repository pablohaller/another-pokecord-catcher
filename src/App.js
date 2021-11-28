import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PokeCard from "./components/PokeCard/PokeCard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/pokemon/:id" element={<PokeCard />} />
          <Route path="/error/:id" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
