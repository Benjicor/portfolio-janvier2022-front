/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';

import Modal from '../../Modal/Modal';
import ModalCertificat from '../../ModalCertificat/ModalCertificat';

import grandePhoto from '../../../assets/jpg/grande-photo.jpg';
import petitePhoto from '../../../assets/png/petite-photo-ronde.png';

import html5 from '../../../assets/svg/html5.svg';
import css3 from '../../../assets/svg/css3.svg';
import javascript from '../../../assets/svg/javascript.svg';
import nodejs from '../../../assets/svg/nodejs.svg';
import reactjs from '../../../assets/svg/react.svg';
import mysql from '../../../assets/svg/mysql.svg';
import git from '../../../assets/svg/git.svg';
import github from '../../../assets/svg/github-original.svg';

import certificatHtml5Css3 from '../../../assets/jpg/CertificatDeReussite-ApprenezACreerVotreSiteWebAvecHtml5EtCss3.jpg';
import certificatJavaScript from '../../../assets/jpg/CertificatDeReussite-ApprenezAProgrammerAvecJavaScript.jpg';
import certificatNode from '../../../assets/jpg/CertificatDeReussite-PassezAuFullStackAvecNode.jsExpressEtMongoDB.jpg';
import certificatReact from '../../../assets/jpg/CertificatDeReussite-DebutezAvecReact.jpg';
import certificatMySQL from '../../../assets/jpg/CertificatDeReussite-ImplementezVosBasesDeDonneesRelationnellesAvecSQL.jpg';
import certificatGitEtGitHub from '../../../assets/jpg/CertificatDeReussite-GerezDuCodeAvecGitEtGitHub.jpg';

import './Home.css';

function Home({ setTitlePage }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalCertificatHtml5, setOpenModalCertificatHtml5] =
    useState(false);
  const [openModalCertificatCss3, setOpenModalCertificatCss3] = useState(false);
  const [openModalCertificatJavaScript, setOpenModalCertificatJavaScript] =
    useState(false);
  const [openModalCertificatNode, setOpenModalCertificatNode] = useState(false);
  const [openModalCertificatReact, setOpenModalCertificatReact] =
    useState(false);
  const [openModalCertificatMySQL, setOpenModalCertificatMySQL] =
    useState(false);
  const [openModalCertificatGit, setOpenModalCertificatGit] = useState(false);
  const [openModalCertificatGitHub, setOpenModalCertificatGitHub] =
    useState(false);

  useEffect(() => {
    setTitlePage('Accueil');
  }, []);

  return (
    <div className="home-page">
      <div className="home">
        <h1 className="welcome">Bienvenue sur mon Portfolio</h1>
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
            HTML5
            <img
              className="certificat"
              src={html5}
              alt="Logo Html5"
              onClick={() => setOpenModalCertificatHtml5(true)}
            />
          </li>
          {openModalCertificatHtml5 && (
            <ModalCertificat
              closeModal={setOpenModalCertificatHtml5}
              img={certificatHtml5Css3}
            />
          )}

          <li>
            CSS3
            <img
              className="certificat"
              src={css3}
              alt="Logo Css3"
              onClick={() => setOpenModalCertificatCss3(true)}
            />
          </li>
          {openModalCertificatCss3 && (
            <ModalCertificat
              closeModal={setOpenModalCertificatCss3}
              img={certificatHtml5Css3}
            />
          )}

          <li>
            JavaScript
            <img
              className="certificat"
              src={javascript}
              alt="Logo JavaScript"
              onClick={() => setOpenModalCertificatJavaScript(true)}
            />
          </li>
          {openModalCertificatJavaScript && (
            <ModalCertificat
              closeModal={setOpenModalCertificatJavaScript}
              img={certificatJavaScript}
            />
          )}

          <li>
            Node JS
            <img
              className="certificat"
              src={nodejs}
              alt="Logo Node JS"
              onClick={() => setOpenModalCertificatNode(true)}
            />
          </li>
          {openModalCertificatNode && (
            <ModalCertificat
              closeModal={setOpenModalCertificatNode}
              img={certificatNode}
            />
          )}

          <li>
            React JS
            <img
              className="certificat"
              src={reactjs}
              alt="Logo React JS"
              onClick={() => setOpenModalCertificatReact(true)}
            />
          </li>
          {openModalCertificatReact && (
            <ModalCertificat
              closeModal={setOpenModalCertificatReact}
              img={certificatReact}
            />
          )}

          <li>
            MySQL
            <img
              className="certificat"
              src={mysql}
              alt="Logo MySQL"
              onClick={() => setOpenModalCertificatMySQL(true)}
            />
          </li>
          {openModalCertificatMySQL && (
            <ModalCertificat
              closeModal={setOpenModalCertificatMySQL}
              img={certificatMySQL}
            />
          )}

          <li>
            Git
            <img
              className="certificat"
              src={git}
              alt="Logo Git"
              onClick={() => setOpenModalCertificatGit(true)}
            />
          </li>
          {openModalCertificatGit && (
            <ModalCertificat
              closeModal={setOpenModalCertificatGit}
              img={certificatGitEtGitHub}
            />
          )}

          <li>
            GitHub
            <img
              className="certificat"
              src={github}
              alt="Logo GitHub"
              onClick={() => setOpenModalCertificatGitHub(true)}
            />
          </li>
          {openModalCertificatGitHub && (
            <ModalCertificat
              closeModal={setOpenModalCertificatGitHub}
              img={certificatGitEtGitHub}
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default Home;
