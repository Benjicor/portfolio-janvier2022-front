import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ButtonSite from '../../SiteComposants/ButtonSite/ButtonSite';

import './Contact.css';

function Contact({ setSiteTitle }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/emails/hbs-and-file`,
        {
          email,
          firstname,
          lastname,
          subject,
          message,
        }
      )
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    setSiteTitle('Contact');
  }, []);
  return (
    <div className="contact-page">
      <div className="contact">
        <h1 className="contact-title">Me contacter</h1>
        <form onSubmit={onSubmit} autoComplete="on">
          <div className="container-form">
            <div className="contact-form">
              <label
                htmlFor="contact-firstname"
                className="contact-firstname"
                id="label-contact"
              >
                Prénom :
                <input
                  type="text"
                  required="required"
                  name="prenom"
                  id="contact-firstname"
                  placeholder="Entrer votre Prénom"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  autoComplete="given-name"
                />
              </label>
            </div>
            <div className="contact-form">
              <label
                htmlFor="contact-lastname"
                className="contact-lastname"
                id="label-contact"
              >
                NOM :
                <input
                  type="text"
                  required="required"
                  name="nom"
                  id="contact-lastname"
                  placeholder="Entrer votre NOM"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  autoComplete="family-name"
                />
              </label>
            </div>
            <div className="contact-form">
              <label
                htmlFor="contact-email"
                className="contact-email"
                id="label-contact"
              >
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
              <label
                htmlFor="contact-subject"
                className="contact-subject"
                id="label-contact"
              >
                Sujet :
                <input
                  type="text"
                  required="required"
                  name="sujet"
                  id="contact-subject"
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
                id="label-contact"
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
            <div className="button-contact">
              <ButtonSite className="send" buttonName="Envoyer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
