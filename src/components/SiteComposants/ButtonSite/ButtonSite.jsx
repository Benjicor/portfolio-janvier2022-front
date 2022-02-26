import React from 'react';

import './ButtonSite.css';

function ButtonDash({ buttonName, className }) {
  return (
    <div>
      <button className={`button ${className}`} type="submit">
        <p>
          <span className="button-name"> {buttonName} </span>
        </p>
      </button>
    </div>
  );
}

export default ButtonDash;
