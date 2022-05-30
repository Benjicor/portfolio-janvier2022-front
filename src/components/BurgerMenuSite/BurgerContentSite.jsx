import React from 'react';
import { Link } from 'react-router-dom';

import './BurgerContentSite.css';

function BurgerContentSite({ handleClick }) {
  return (
    <div>
      <ul className="nav-site">
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
      </ul>
    </div>
  );
}

export default BurgerContentSite;
