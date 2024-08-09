import React from "react";
import "./index.css"
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
