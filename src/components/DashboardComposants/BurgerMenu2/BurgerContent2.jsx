import React from 'react';
import { Link } from 'react-router-dom';

import './BurgerContent2.css';

function BurgerContent2({ handleClick }) {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link
            className="link"
            to="/Private/Admin/Fichiers"
            onClick={handleClick}
          >
            Fichiers
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/Private/Admin/Images"
            onClick={handleClick}
          >
            Images
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/Private/Admin/Technologies"
            onClick={handleClick}
          >
            Technologies
          </Link>
        </li>
        <li>
          <a className="link" href="/" onClick={handleClick}>
            Deconnexion
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContent2;
