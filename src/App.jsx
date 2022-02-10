import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BurgerMenu from './components/SiteComposants/BurgerMenu/BurgerMenu';
import Accueil from './components/SitePages/Accueil/Accueil';
import APropos from './components/SitePages/APropos/APropos';
import Projets from './components/SitePages/Projets/Projets';
import Contact from './components/SitePages/Contact/Contact';
import Footer from './components/SiteComposants/Footer/Footer';

function App() {
  const [title, setTitle] = useState('');
  return (
    <div className="app">
      <BurgerMenu title={title} />
      <Routes>
        <Route path="/" element={<Accueil setTitle={setTitle} />} />
        <Route path="/APropos" element={<APropos setTitle={setTitle} />} />
        <Route path="/Projets" element={<Projets setTitle={setTitle} />} />
        <Route path="/Contact" element={<Contact setTitle={setTitle} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
