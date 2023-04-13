/*eslint-disable*/

import "./App.css";
import Home from "./components/Home/Home";
import Name from "./components/Home/Name";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
