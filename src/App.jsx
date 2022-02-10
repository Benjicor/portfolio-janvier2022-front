import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BurgerMenu from './components/D-ComposantsSite/BurgerMenu/BurgerMenu';
import Accueil from './components/C-PagesSite/Accueil/Accueil';
import APropos from './components/C-PagesSite/APropos/APropos';
import Projets from './components/C-PagesSite/Projets/Projets';
import Contact from './components/C-PagesSite/Contact/Contact';
import Footer from './components/D-ComposantsSite/Footer/Footer';

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
