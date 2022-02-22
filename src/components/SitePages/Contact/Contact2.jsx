import React, { useEffect } from 'react';

import './Contact2.css';

function Contact2({ setSiteTitle }) {
  useEffect(() => {
    setSiteTitle('Contact2');
  }, []);
  return (
    <div className="page-contact2">
      <div className="contact2">
        <div>.</div>
      </div>
    </div>
  );
}

export default Contact2;
