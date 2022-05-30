import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
  const [cookies] = useCookies();

  useEffect(() => {
    if (cookies.id) {
      setUser(true);
    }
  }, []);

  return (
    <div className="app">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {!user ? (
        <BurgerMenuSite titlePage={titlePage} />
      ) : (
        <BurgerMenuDashboard titlePage={titlePage} />
      )}
      <Routes>
        <Route path="/" element={<Home setTitlePage={setTitlePage} />} />
        <Route path="/about" element={<About setTitlePage={setTitlePage} />} />
        <Route
          path="/projects"
          element={<Projects setTitlePage={setTitlePage} />}
        />
        <Route
          path="/contact"
          element={<Contact setTitlePage={setTitlePage} />}
        />
        <Route
          path="/private/admin/connect"
          element={<Connect setTitlePage={setTitlePage} setUser={setUser} />}
        />
        {user && (
          <>
            <Route
              path="/private/admin/create-user"
              element={<Admin setTitlePage={setTitlePage} />}
            />
            <Route
              path="private/admin/projects"
              element={<Files setTitlePage={setTitlePage} />}
            />
            <Route
              path="private/admin/images"
              element={<Images setTitlePage={setTitlePage} />}
            />
            <Route
              path="private/admin/technologies"
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
