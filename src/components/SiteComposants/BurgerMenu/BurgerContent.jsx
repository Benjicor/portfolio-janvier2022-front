import React from 'react';
import { Link } from 'react-router-dom';

import './BurgerContent.css';

function BurgerContent({ handleClick }) {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link className="link" to="/" onClick={handleClick}>
            Accueil
          </Link>
        </li>
        <li>
          <Link className="link" to="/APropos" onClick={handleClick}>
            À propos
          </Link>
        </li>
        <li>
          <Link className="link" to="/Projets" onClick={handleClick}>
            Projets
          </Link>
        </li>
        <li>
          <Link className="link" to="/Contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContent;
