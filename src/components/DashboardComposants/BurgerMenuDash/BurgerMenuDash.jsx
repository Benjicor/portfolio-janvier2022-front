import React, { useState } from 'react';

import BurgerContentDash from './BurgerContentDash';

import './BurgerMenuDash.css';

function BurgerMenuDash({ dashboardTitle }) {
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
          {open ? <BurgerContentDash handleClick={handleClick} /> : null}
        </button>
      </div>
      <div className="title-burger-menu-dashboard">{dashboardTitle}</div>
    </header>
  );
}

export default BurgerMenuDash;
