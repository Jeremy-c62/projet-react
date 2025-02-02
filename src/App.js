import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navigation';  // Navbar
import Home from './pages/Acceuil';           // Page d'accueil
import Service from './pages/Service';         // Page à propos
import Portfolio from './pages/Portfolio';         // Page à propos
import Contact from './pages/Contact';     // Page contact
import Mention from './pages/Mention';     // Page contact
import Footer from './components/Footer';  // Footer

function App() {
  return (
    <Router>
      <div>
        {/* Barre de navigation visible sur toutes les pages */}
        <Navbar />

        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Home />} />         {/* Route vers la page d'accueil */}
          <Route path="/Service" element={<Service />} />   {/* Route vers la page À propos */}
          <Route path="/portfolio" element={<Portfolio />} />   {/* Route vers la page À propos */}
          <Route path="/contact" element={<Contact />} /> {/* Route vers la page Contact */}
          <Route path="/Mention" element={<Mention />} /> {/* Route vers la page Contact */}
        </Routes>

        {/* Pied de page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;