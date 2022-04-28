import React from 'react';

import './Modal.css';

function Modal({ closeModal, img }) {
  return (
    <div className="container-modal">
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

export default Modal;
