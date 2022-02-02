import React, { useEffect } from 'react';
import './APropos.css';

function APropos({ setTitle }) {
  useEffect(() => {
    setTitle('À propos');
  }, []);
  return (
    <div className="a-propos">
      <div>.</div>
    </div>
  );
}

export default APropos;
