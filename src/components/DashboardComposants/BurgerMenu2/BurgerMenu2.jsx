import React, { useState } from 'react';

import BurgerContent2 from './BurgerContent2';

import './BurgerMenu2.css';

function BurgerMenu2({ dashboardTitle }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className={`header ${open ? 'is-open' : ''}  `}>
      <div className="container-btn">
        <button type="button" onClick={handleClick} className="burger-menu">
          <span />
          <span />
          <span />
          {open ? <BurgerContent2 handleClick={handleClick} /> : null}
        </button>
      </div>
      <div className="title">{dashboardTitle}</div>
    </header>
  );
}

export default BurgerMenu2;
