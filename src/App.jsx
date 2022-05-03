import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import BurgerMenuSite from './components/BurgerMenuSite/BurgerMenuSite';
import Home from './components/PagesSite/Home/Home';
import About from './components/PagesSite/About/About';
import Projects from './components/PagesSite/Projects/Projects';
import Contact from './components/PagesSite/Contact/Contact';
import Footer from './components/Footer/Footer';

import BurgerMenuDashboard from './components/BurgerMenuDashboard/BurgerMenuDashboard';
import Admin from './components/PagesDashboard/Admin/Admin';
import Connect from './components/PagesDashboard/Connect/Connect';
import Files from './components/PagesDashboard/Files/Files';
import Images from './components/PagesDashboard/Images/Images';
import Technologies from './components/PagesDashboard/Technologies/Technologies';

function App() {
  const [titlePage, setTitlePage] = useState('');
  const [user, setUser] = useState(false);

  return (
    <div className="app">
      {!user ? (
        <BurgerMenuSite titlePage={titlePage} />
      ) : (
        <BurgerMenuDashboard titlePage={titlePage} />
      )}
      <Routes>
        <Route path="/" element={<Home setTitlePage={setTitlePage} />} />
        <Route path="/About" element={<About setTitlePage={setTitlePage} />} />
        <Route
          path="/Projects"
          element={<Projects setTitlePage={setTitlePage} />}
        />
        <Route
          path="/Contact"
          element={<Contact setTitlePage={setTitlePage} />}
        />
        <Route
          path="/Private/Admin/Connect"
          element={<Connect setTitlePage={setTitlePage} setUser={setUser} />}
        />
        {user && (
          <>
            <Route
              path="/Private/Admin/CreateUser"
              element={<Admin setTitlePage={setTitlePage} />}
            />
            <Route
              path="Private/Admin/Files"
              element={<Files setTitlePage={setTitlePage} />}
            />
            <Route
              path="Private/Admin/Images"
              element={<Images setTitlePage={setTitlePage} />}
            />
            <Route
              path="Private/Admin/Technologies"
              element={<Technologies setTitlePage={setTitlePage} />}
            />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
