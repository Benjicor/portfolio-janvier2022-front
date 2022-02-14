import React, { useEffect } from 'react';

import './Contact.css';

function Contact({ setSiteTitle }) {
  useEffect(() => {
    setSiteTitle('Contact');
  }, []);
  return (
    <div className="page-contact">
      <div className="contact">
        <div>.</div>
      </div>
    </div>
  );
}

export default Contact;
