import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerContent.css';

function BurgerContent({ handleClick }) {
  return (
    <div>
      <ul className="nav">
        <li>
          <a className="section" href="#sectionHome" onClick={handleClick}>
            Home
          </a>
        </li>
        <li>
          <a className="section" href="#accueil" onClick={handleClick}>
            About
          </a>
        </li>
        <li>
          <Link className="link" to="/mapbar" onClick={handleClick}>
            Projects
          </Link>
        </li>
        <li>
          <a className="section" href="#sectionCréation" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BurgerContent;
