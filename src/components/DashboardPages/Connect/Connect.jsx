import React, { useEffect } from 'react';

import './Connect.css';

function Connect({ setDashboardTitle }) {
  useEffect(() => {
    setDashboardTitle('Administration');
  }, []);
  return (
    <div className="dashboard-connect">
      <div className="connect">
        <div>.</div>
      </div>
    </div>
  );
}

export default Connect;
