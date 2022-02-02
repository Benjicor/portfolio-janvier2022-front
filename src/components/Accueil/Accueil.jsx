import React, { useEffect } from 'react';
import './Accueil.css';
import grandePhoto from '../../assets/jpg/grande-photo.jpg';
import petitePhoto from '../../assets/png/petite-photo-ronde.png';

function Accueil({ setTitle }) {
  useEffect(() => {
    setTitle('Accueil');
  }, []);
  return (
    <div className="accueil">
      <h1 className="bienvenue">Bienvenue sur mon Portfolio</h1>
      <div className="rond">
        <div className="carre">
          <a href={grandePhoto} target="_blank" rel="noreferrer">
            <img
              className="photo-profil"
              src={petitePhoto}
              alt="Img de profil"
            />
          </a>
        </div>
      </div>
      <h2>Je suis Benjamin CORDREAUX,</h2>
      <p>
        ici, vous trouverez mes créations, mes chefs-d&#39;oeuvres et plus
        encore...
      </p>
    </div>
  );
}

export default Accueil;
