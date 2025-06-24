import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  return (
    <Router>
      <div className="main-layout">
        <nav className="navbar">
          <div className="logo">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>124 Media</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer className="footer">
          &copy; {new Date().getFullYear()} 124 Media Company. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
