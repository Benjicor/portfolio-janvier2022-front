import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

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
  const [siteTitle, setSiteTitle] = useState('');
  const [dashboardTitle, setDashboardTitle] = useState('');
  const [user, setUser] = useState(0);

  useEffect(async () => {
    await axios
      .get(`${process.env.REACT_APP_API_PORTFOLIO_URL}/api/auth/connect`)
      .then((response) => setUser.data(response.data));
  }, []);

  return (
    <div className="app">
      {!user ? (
        <BurgerMenuSite siteTitle={siteTitle} />
      ) : (
        <BurgerMenuDashboard dashboardTitle={dashboardTitle} />
      )}
      <Routes>
        <Route path="/" element={<Home setSiteTitle={setSiteTitle} />} />
        <Route path="/About" element={<About setSiteTitle={setSiteTitle} />} />
        <Route
          path="/Projects"
          element={<Projects setSiteTitle={setSiteTitle} />}
        />
        <Route
          path="/Contact"
          element={<Contact setSiteTitle={setSiteTitle} />}
        />
        <Route
          path="/Private/Admin/Connect"
          element={<Connect setDashboardTitle={setDashboardTitle} />}
        />
        {user !== 0 && (
          <>
            <Route
              path="/Private/Admin/CreateUser"
              element={<Admin setDashboardTitle={setDashboardTitle} />}
            />
            <Route
              path="/Private/Admin/Connect"
              element={<Connect setDashboardTitle={setDashboardTitle} />}
            />
            <Route
              path="Private/Admin/Files"
              element={<Files setDashboardTitle={setDashboardTitle} />}
            />
            <Route
              path="Private/Admin/Images"
              element={<Images setDashboardTitle={setDashboardTitle} />}
            />
            <Route
              path="Private/Admin/Technologies"
              element={<Technologies setDashboardTitle={setDashboardTitle} />}
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
