import React from 'react';

import './ButtonDash.css';

function ButtonDash({ buttonName, className }) {
  return (
    <div>
      <button className={`button ${className}`} type="button">
        <p>
          <span className="button-name"> {buttonName} </span>
        </p>
      </button>
    </div>
  );
}

export default ButtonDash;
