import React, { useState } from 'react';

import BurgerContentSite from './BurgerContentSite';

import './BurgerMenuSite.css';

function BurgerMenuSite({ siteTitle }) {
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
          {open ? <BurgerContentSite handleClick={handleClick} /> : null}
        </button>
      </div>
      <div className="title-burger-menu-site">{siteTitle}</div>
    </header>
  );
}

export default BurgerMenuSite;
