import React, { useEffect, useState } from 'react';

import './Contact.css';

function Contact({ setSiteTitle }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (!firstName) {
      alert("Je vous remercie d'entrer votre Prénom");
      return;
    }
    if (!lastName) {
      alert("Je vous remercie d'entrer votre NOM");
      return;
    }
    if (!email) {
      alert("Je vous remercie d'entrer votre email");
      return;
    }
    if (!message) {
      alert("Je vous remercie d'entrer votre message");
      return;
    }
    alert('Je vous remercie de votre message');
  };

  useEffect(() => {
    setSiteTitle('Contact');
  }, []);
  return (
    <div className="page-contact">
      <div className="contact">
        <form>
          <div className="container-form">
            <div className="contact-form">
              <h1 className="contact-title">Me contacter</h1>
              <label
                htmlFor="contact-first-name"
                className="contact-first-name"
              >
                Prénom :
                <input
                  type="text"
                  id="contact-first-name"
                  placeholder="Entrer votre Prénom"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="off"
                />
              </label>
            </div>
            <div>
              <label htmlFor="contact-last-name" className="contact-last-name">
                NOM :
                <input
                  type="text"
                  id="contact-last-name"
                  placeholder="Entrer votre NOM"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="off"
                />
              </label>
            </div>
            <div>
              <label htmlFor="contact-email" className="contact-email">
                Adresse email :
                <input
                  type="email"
                  id="contact-email"
                  placeholder="Entrer votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="contact-description"
                className="contact-description"
              >
                Message :
                <textarea
                  type="text"
                  rows={10}
                  id="contact-description"
                  placeholder="Entrer votre message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="button-contact" className="button-contact">
                <input
                  type="button"
                  id="button-contact"
                  value="Envoyer"
                  onClick={onSubmit}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
