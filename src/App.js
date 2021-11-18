import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Navbar } from "./components/Navbar";
import { Sorting } from "./Pages/Sorting";
import { Pathfinding } from "./Pages/Pathfinding";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sorting-visualizer" element={<Sorting />} />
        <Route exact path="/pathfinding-visualizer" element={<Pathfinding />} />
      </Routes>
    </Router>
  );
}
export default App;
