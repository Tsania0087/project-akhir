import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Impor komponen layout
import Header from './components/Navbar';
import Footer from './components/Footer';

// Impor semua halaman
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;