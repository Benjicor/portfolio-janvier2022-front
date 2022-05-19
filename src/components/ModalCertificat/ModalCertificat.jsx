import React from 'react';

import './ModalCertificat.css';

function ModalCertificat({ closeModal, img }) {
  return (
    <div className="container-modal-certificat">
      <div className="close-btn">
        <button
          type="button"
          className="x-btn"
          onClick={() => closeModal(false)}
        >
          X
        </button>
      </div>
      <img src={img} alt="" />
    </div>
  );
}

export default ModalCertificat;
