import React, { useState } from 'react';
import axios from 'axios';

import ButtonDash from '../../DashboardComposants/ButtonDash/ButtonDash';

import './Admin.css';

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Admin({ setDashboardTitle }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !firstname ||
      !lastname ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert('Vous devez fournir toutes les informations');
    } else if (password !== confirmPassword) {
      alert('Le mot de passe et sa confirmation doivent être identique');
    } else {
      console.log("Données envoyées pour créer l'utilisateur");
      try {
        const response = await axios.post(
          `${API_URL}/api/users`,
          {
            firstname,
            lastname,
            username,
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );
        if (response.status === 201) {
          alert('Nouvel utilisateur créé');
          setFirstname('');
          setLastname('');
          setUsername('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        } else {
          alert('Erreur');
        }
      } catch (err) {
        alert(err.response.data);
      }
    }
  };

  setDashboardTitle("Création d'Utilisateur");

  return (
    <div className="dashboard-admin">
      <div className="admin">
        <form onSubmit={handleSubmit}>
          <div className="container-form-admin">
            <div className="form-group-admin-first-name">
              <h2>Prénom</h2>
              <label htmlFor="admin-first-name" className="admin-first-name">
                Prénom
                <input
                  type="text"
                  id="admin-first-name"
                  placeholder="Entrer votre Prénom"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group-admin-last-name">
              <h2>NOM</h2>
              <label htmlFor="admin-last-name" className="admin-last-name">
                NOM
                <input
                  type="text"
                  id="admin-last-name"
                  placeholder="Entrer votre NOM"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group-admin-user-name">
              <h2>Nom d&#39;utilisateur</h2>
              <label htmlFor="admin-user-name" className="admin-user-name">
                Nom d&#39;utilisateur
                <input
                  type="text"
                  id="admin-user-name"
                  placeholder="Entrer votre Prénom"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group-admin-email">
              <h2>Email</h2>
              <label htmlFor="admin-email" className="admin-email">
                Email
                <input
                  type="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  id="admin-email"
                  placeholder="Entrer votre e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group-admin-password">
              <h2>Mot de passe</h2>
              <label htmlFor="admin-password" className="admin-password">
                Mot de passe
                <input
                  type="password"
                  minLength="10"
                  id="admin-password"
                  placeholder="Entrer votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
              </label>
            </div>
            <div className="form-group-admin-confirm-password">
              <h2>Confirmer Mot de passe</h2>
              <label
                htmlFor="admin-confirm-password"
                className="admin-confirm-password"
              >
                Confirmer Mot de passe
                <input
                  type="password"
                  minLength="10"
                  id="admin-confirm-password"
                  placeholder="Confirmer votre mot de passe"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="off"
                />
              </label>
            </div>
            <div className="button-admin">
              <ButtonDash className="create" buttonName="Créer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
