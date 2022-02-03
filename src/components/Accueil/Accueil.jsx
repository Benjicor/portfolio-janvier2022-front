import React, { useState, useEffect } from 'react';
import './Accueil.css';
import Modal from '../Modal/Modal';
import grandePhoto from '../../assets/jpg/grande-photo.jpg';
import petitePhoto from '../../assets/png/petite-photo-ronde.png';

function Accueil({ setTitle }) {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setTitle('Accueil');
  }, []);
  return (
    <div className="page">
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
    </div>
  );
}

export default Accueil;
