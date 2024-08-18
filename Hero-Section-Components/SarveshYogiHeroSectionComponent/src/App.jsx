import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

export default function App() {
  return (
    <div
    >
      <Router>
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="contact">
          <Footer />
        </div>
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}
