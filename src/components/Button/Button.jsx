import React from 'react';

function Button({ className, buttonName, submit, onClick }) {
  return (
    <button
      className={`button ${className}`}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}

export default Button;
