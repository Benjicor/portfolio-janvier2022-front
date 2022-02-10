import React from 'react';
import './Footer.css';
import linkedin from '../../../assets/svg/linkedin.svg';
import github from '../../../assets/svg/github.svg';

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
