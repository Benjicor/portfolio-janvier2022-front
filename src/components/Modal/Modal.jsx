import React from 'react';

import './Modal.css';

function Modal({ className, closeModal, img }) {
  return (
    <div className={`${className}`}>
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
