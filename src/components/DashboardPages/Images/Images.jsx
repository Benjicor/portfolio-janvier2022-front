import React, { useEffect } from 'react';

import './Images.css';

function Images({ setDashboardTitle }) {
  useEffect(() => {
    setDashboardTitle('Administration des Images');
  }, []);
  return (
    <div className="dashboard-images">
      <div className="images">
        <div>.</div>
      </div>
    </div>
  );
}

export default Images;
