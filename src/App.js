import "./App.css";
import Home from "./home.js";
import Addnew from "./components/addnew.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addnew" element={<Addnew />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
