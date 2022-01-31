import React from 'react';
import './Footer.css';
import logoLinkedin from '../../assets/svg/linkedin.svg';

function Footer() {
  return (
    <Footer>
      <div className="container-footer">
        <a
          href="http://www.linkedin.com/in/Benjicor"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={logoLinkedin}
            alt="Logo cliquable Linkedin"
            className="linkedin"
          />
        </a>
      </div>
    </Footer>
  );
}

export default Footer;
