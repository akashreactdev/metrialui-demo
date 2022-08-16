import React from "react";

//styling
// import "./styles/App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//pages path
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Career from "./pages/career/Career";
import Contact from "./pages/contact/Contact";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
