/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../Modal/Modal';

import grandePhoto from '../../../assets/jpg/grande-photo.jpg';
import petitePhoto from '../../../assets/png/petite-photo-ronde.png';

import './About.css';

function About({ setTitlePage, handleClick }) {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTitlePage('À propos');
  }, []);

  return (
    <div className="about-page">
      <h1 className="about-title">Bonjour et bienvenue.</h1>
      <div className="container-about">
        <div className="container-about-image">
          <div className="about-rond">
            <div className="about-carre">
              <img
                className="about-photo-profil"
                src={petitePhoto}
                alt="Img de profil"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>
          {openModal && (
            <Modal
              className="container-modal"
              closeModal={setOpenModal}
              img={grandePhoto}
            />
          )}
        </div>
        <div className="container-about-description">
          <h1 className="about-title">Je suis Benjamin CORDREAUX.</h1>
        </div>
      </div>
      <h1 className="about-title">
        Je vais tenter de vous présenter qui je suis.
      </h1>
      <div className="about">
        <p className="presentation-p">
          Mes 20 années d’expériences en Hôtellerie-Restauration sur des postes
          de direction et d’encadrement m’ont permis de développer des
          compétences transversales certaines, et tout à fait transférables à
          mon récent métier de développeur web. <br />
          <br />
          En effet, je sais faire preuve d’une grande patience, d’une forte
          capacité à résoudre des problèmes et d’une grande faculté de gestion
          du temps et d’anticipation. <br />
          <br />
          Curieux de nature, je suis quotidiennement en veille sur le sujet des
          nouvelles technologies. Engagé dans le monde associatif, j’aime
          travailler en équipe et j’ai un très bon sens du relationnel et de la
          communication. Je souhaite désormais mettre tous mes atouts au service
          du développement de projets web et intégrer une équipe dynamique !
        </p>
        <div className="container-btn-about">
          <ul className="button-about">
            <li>
              <Link
                className="button-my-work"
                to="/projects"
                onClick={handleClick}
              >
                Mes réalisations
              </Link>
            </li>
            <li>
              <Link
                className="button-contact-me"
                to="/contact"
                onClick={handleClick}
              >
                Me contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
