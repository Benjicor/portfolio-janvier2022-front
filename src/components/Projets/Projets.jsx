import React, { useEffect } from 'react';
import './Projets.css';

function Projets({ setTitle }) {
  useEffect(() => {
    setTitle('Projets');
  }, []);
  return (
    <div className="page">
      <div className="projets">
        <div>.</div>
      </div>
    </div>
  );
}

export default Projets;
