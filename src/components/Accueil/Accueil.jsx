/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import './Accueil.css';
import Modal from '../Modal/Modal';
import grandePhoto from '../../assets/jpg/grande-photo.jpg';
import petitePhoto from '../../assets/png/petite-photo-ronde.png';
import html5 from '../../assets/svg/html5.svg';
import css3 from '../../assets/svg/css3.svg';
import javascript from '../../assets/svg/javascript.svg';
import nodejs from '../../assets/svg/nodejs.svg';
import react from '../../assets/svg/react.svg';
import mysql from '../../assets/svg/mysql.svg';
import git from '../../assets/svg/git.svg';
import github from '../../assets/svg/github-original.svg';
import certificatHtml5Css3 from '../../assets/pdf/CertificatDeReussite-ApprenezACréerVotreSiteWebAvecHtml5EtCss3.pdf';

function Accueil({ setTitle }) {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setTitle('Accueil');
  }, []);
  return (
    <div className="page-accueil">
      <div className="accueil">
        <h1 className="bienvenue">Bienvenue sur mon Portfolio</h1>
        <div className="rond">
          <div className="carre">
            <img
              className="photo-profil"
              src={petitePhoto}
              alt="Img de profil"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>
        {openModal && <Modal closeModal={setOpenModal} img={grandePhoto} />}
        <h2>Je suis Benjamin CORDREAUX,</h2>
        <p>
          ici, vous trouverez mes créations, mes chefs-d&#39;oeuvres et plus
          encore...
        </p>
      </div>
      <div className="techno">
        <ul className="logo">
          <li>
            <a
              className="certificat"
              href={certificatHtml5Css3}
              target="_blank"
              rel="noreferrer"
            >
              HTML5
              <img src={html5} alt="Logo Html5" />
            </a>
          </li>

          <li>
            <a
              className="certificat"
              href={certificatHtml5Css3}
              target="_blank"
              rel="noreferrer"
            >
              CSS3
              <img src={css3} alt="Logo Css3" />
            </a>
          </li>

          <li>
            javascript
            <img src={javascript} alt="Logo Javascript" />
          </li>

          <li>
            Node JS
            <img src={nodejs} alt="Logo Node JS" />
          </li>

          <li>
            React JS
            <img src={react} alt="Logo React JS" />
          </li>

          <li>
            Mysql
            <img src={mysql} alt="Logo Mysql" />
          </li>

          <li>
            Git
            <img src={git} alt="Logo Git" />
          </li>

          <li>
            Github
            <img src={github} alt="Logo Github" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Accueil;
