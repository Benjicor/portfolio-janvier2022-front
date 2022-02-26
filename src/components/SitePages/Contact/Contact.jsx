import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ButtonSite from '../../SiteComposants/ButtonSite/ButtonSite';

import './Contact.css';

function Contact({ setSiteTitle }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async () => {
    await axios.post(
      `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/emails/hbs-and-file`,
      {
        email,
        firstName,
        lastName,
        subject,
        message,
      }
    );
  };

  setSiteTitle('Contact');
  useEffect(() => {}, []);
  return (
    <div className="page-contact">
      <div className="contact">
        <h1 className="contact-title">Me contacter</h1>
        <form onSubmit={onSubmit} autoComplete="on">
          <div className="container-form">
            <div className="contact-form">
              <label
                htmlFor="contact-first-name"
                className="contact-first-name"
              >
                Prénom :
                <input
                  type="text"
                  required="required"
                  name="prenom"
                  id="contact-first-name"
                  placeholder="Entrer votre Prénom"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                />
              </label>
            </div>
            <div className="contact-form">
              <label htmlFor="contact-last-name" className="contact-last-name">
                NOM :
                <input
                  type="text"
                  required="required"
                  name="nom"
                  id="contact-last-name"
                  placeholder="Entrer votre NOM"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </label>
            </div>
            <div className="contact-form">
              <label htmlFor="contact-email" className="contact-email">
                Adresse email :
                <input
                  type="email"
                  required="required"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  name="email"
                  id="contact-email"
                  placeholder="Entrer votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </label>
            </div>
            <div className="contact-form">
              <label htmlFor="contact-sujet" className="contact-sujet">
                Sujet :
                <input
                  type="text"
                  required="required"
                  name="sujet"
                  id="contact-sujet"
                  placeholder="Entrer votre raison de prise de contact"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  autoComplete="on"
                />
              </label>
            </div>
            <div className="contact-form">
              <label
                htmlFor="contact-description"
                className="contact-description"
              >
                Message :
                <textarea
                  type="text"
                  required="required"
                  name="message"
                  rows={10}
                  id="contact-description"
                  placeholder="Entrer votre message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  autoComplete="on"
                />
              </label>
            </div>
            <div className="contact-button">
              <ButtonSite className="send" buttonName="Envoyer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
