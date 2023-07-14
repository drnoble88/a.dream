import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./Nav.js";
import Destination from "./Destination.js";

function App() {
  return (
    <BrowserRouter>
     <Nav />
  <Routes>
  <Route path="/" element={<Destination/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
