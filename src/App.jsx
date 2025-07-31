import './style.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bracelets from './pages/Bracelets';
import Earrings from './pages/Earrings';
import Necklaces from './pages/Necklaces';
import Rings from './pages/Rings';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
