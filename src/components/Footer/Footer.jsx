import React from 'react';

import linkedin from '../../assets/svg/linkedin.svg';
import github from '../../assets/svg/github.svg';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="logo-cliquable">
        <a
          className="linkedin"
          href="http://www.linkedin.com/in/Benjicor"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Logo cliquable Linkedin" />
        </a>
        <h4 className="follow-me">Me suivre</h4>
        <a
          className="github"
          href="http://github.com/Benjicor"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Logo cliquable Github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
