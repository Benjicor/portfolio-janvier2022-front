import React, { useState } from 'react';
import './BurgerMenu.css';
import BurgerContent from './BurgerContent';

function BurgerMenu({ title }) {
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
          {open ? <BurgerContent handleClick={handleClick} /> : null}
        </button>
      </div>
      <div className="title">{title}</div>
    </header>
  );
}

export default BurgerMenu;
