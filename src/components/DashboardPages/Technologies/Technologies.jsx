import React, { useEffect } from 'react';

import './Technologies.css';

function Technologies({ setDashboardTitle }) {
  useEffect(() => {
    setDashboardTitle('Administration des Technologies');
  }, []);
  return (
    <div className="dashboard-technologies">
      <div className="technologies">
        <div>.</div>
      </div>
    </div>
  );
}

export default Technologies;
