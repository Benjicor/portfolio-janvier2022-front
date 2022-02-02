import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Accueil from './components/Accueil/Accueil';
import APropos from './components/APropos/APropos';
import Projets from './components/Projets/Projets';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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
