import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import './BurgerContentDashboard.css';

function BurgerContentDashboard({ handleClick }) {
  const handleLogOut = () => {
    handleClick();
    axios
      .get(`${process.env.REACT_APP_API_PORTFOLIO_URL}/api/auth/logOut`, {
        withCredentials: true,
      })
      .then(() => {
        toast.success('Parfait, vous avez bien été deconnecté');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <ul className="nav-dashboard">
        <li>
          <h2 className="user-site">UTILISATEUR</h2>
        </li>
        <li>
          <Link className="link" to="/" onClick={handleClick}>
            Accueil
          </Link>
        </li>
        <li>
          <Link className="link" to="/about" onClick={handleClick}>
            À propos
          </Link>
        </li>
        <li>
          <Link className="link" to="/projects" onClick={handleClick}>
            Projets
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
        <li>
          <h2 className="admin-dash">ADMINISTRATION</h2>
        </li>
        <li>
          <Link
            className="link"
            to="/private/admin/create-user"
            onClick={handleClick}
          >
            Création d&#39;un utilisateur
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/private/admin/projects"
            onClick={handleClick}
          >
            Administration des Projets
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/private/admin/images"
            onClick={handleClick}
          >
            Administration des Images
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/private/admin/technologies"
            onClick={handleClick}
          >
            Administration des Technologies
          </Link>
        </li>
        <li>
          <a className="link-disconnect" href="/" onClick={handleLogOut}>
            DÉCONNEXION
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContentDashboard;
