import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import BurgerMenuSite from './components/SiteComposants/BurgerMenuSite/BurgerMenuSite';
import Accueil from './components/SitePages/Accueil/Accueil';
import APropos from './components/SitePages/APropos/APropos';
import Projets from './components/SitePages/Projets/Projets';
import Contact from './components/SitePages/Contact/Contact';
import Footer from './components/SiteComposants/Footer/Footer';

import BurgerMenuDash from './components/DashboardComposants/BurgerMenuDash/BurgerMenuDash';
import Admin from './components/DashboardPages/Admin/Admin';
import Connect from './components/DashboardPages/Connect/Connect';
import Fichiers from './components/DashboardPages/Fichiers/Fichiers';
import Images from './components/DashboardPages/Images/Images';
import Technologies from './components/DashboardPages/Technologies/Technologies';

function App() {
  const [siteTitle, setSiteTitle] = useState('');
  const [dashboardTitle, setDashboardTitle] = useState('');
  const [user /* setUser */] = useState(true);
  return (
    <div className="app">
      {!user ? (
        <BurgerMenuSite siteTitle={siteTitle} />
      ) : (
        <BurgerMenuDash dashboardTitle={dashboardTitle} />
      )}
      <Routes>
        <Route path="/" element={<Accueil setSiteTitle={setSiteTitle} />} />
        <Route
          path="/APropos"
          element={<APropos setSiteTitle={setSiteTitle} />}
        />
        <Route
          path="/Projets"
          element={<Projets setSiteTitle={setSiteTitle} />}
        />
        <Route
          path="/Contact"
          element={<Contact setSiteTitle={setSiteTitle} />}
        />
        <Route
          path="/Private/Admin"
          element={<Admin setDashboardTitle={setDashboardTitle} />}
        />
        <Route
          path="/Private/Admin/Connect"
          element={<Connect setDashboardTitle={setDashboardTitle} />}
        />
        {user && (
          <>
            <Route
              path="/Private/Admin/Connect"
              element={<Connect setDashboardTitle={setDashboardTitle} />}
            />
            <Route
              path="Private/Admin/Fichiers"
              element={<Fichiers setDashboardTitle={setDashboardTitle} />}
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
