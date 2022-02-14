import React, { useEffect } from 'react';

import './Fichiers.css';

function Fichiers({ setDashboardTitle }) {
  useEffect(() => {
    setDashboardTitle('Administration des Fichiers');
  }, []);
  return (
    <div className="dashboard-fichiers">
      <div className="fichiers">
        <div>.</div>
      </div>
    </div>
  );
}

export default Fichiers;
