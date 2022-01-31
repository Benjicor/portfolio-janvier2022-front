import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
// import Accueil from './components/Accueil/Accueil';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <BurgerMenu />
              {/* <Accueil /> */}
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
