import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import Button from '../../Button/Button';

import './Admin.css';

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Admin({ setTitlePage }) {
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
      toast.warning('Vous devez fournir toutes les informations');
    } else if (password !== confirmPassword) {
      toast.warning(
        'Le mot de passe et sa confirmation doivent être identique'
      );
    } else {
      toast.info("Données envoyées pour créer l'utilisateur");
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
          toast.success('Nouvel utilisateur créé');
          setFirstname('');
          setLastname('');
          setUsername('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        } else {
          toast.error('Erreur');
        }
      } catch (err) {
        toast.error(err.response.data);
      }
    }
  };

  useEffect(() => {
    setTitlePage("Création d'Utilisateur");
  }, []);

  return (
    <div className="dashboard-admin">
      <h1 className="admin-title">Créer un utilisateur</h1>
      <div className="container-admin">
        <div className="admin">
          <form onSubmit={handleSubmit}>
            <div className="container-form-admin">
              <div className="form-group-admin-firstname">
                <label
                  htmlFor="admin-firstname"
                  className="admin-firstname"
                  id="label-admin"
                >
                  Prénom
                  <input
                    type="text"
                    id="admin-firstname"
                    placeholder="Entrer votre Prénom"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group-admin-lastname">
                <label
                  htmlFor="admin-lastname"
                  className="admin-lastname"
                  id="label-admin"
                >
                  NOM
                  <input
                    type="text"
                    id="admin-lastname"
                    placeholder="Entrer votre NOM"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group-admin-username">
                <label
                  htmlFor="admin-username"
                  className="admin-username"
                  id="label-admin"
                >
                  Nom d&#39;utilisateur
                  <input
                    type="text"
                    id="admin-username"
                    placeholder="Entrer votre Prénom"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group-admin-email">
                <label
                  htmlFor="admin-email"
                  className="admin-email"
                  id="label-admin"
                >
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
                <label
                  htmlFor="admin-password"
                  className="admin-password"
                  id="label-admin"
                >
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
              <div
                className="form-group-admin-confirm-password"
                id="label-admin"
              >
                <label
                  htmlFor="admin-confirm-password"
                  className="admin-confirm-password"
                  id="label-admin"
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
                <Button className="create" buttonName="Créer" submit />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
