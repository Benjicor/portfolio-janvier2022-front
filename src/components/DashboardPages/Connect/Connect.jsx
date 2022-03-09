import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import ButtonDash from '../../DashboardComposants/ButtonDash/ButtonDash';

import './Connect.css';

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;

function Connect({ setDashboardTitle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Vous devez fournir toutes les informations');
    } else {
      try {
        await axios.post(
          `${API_URL}/api/auth/connect`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );
        navigate('/Private/Admin/Files');
      } catch (err) {
        alert(err.response.data);
      }
    }
  };

  setDashboardTitle('Connexion');

  return (
    <div className="dashboard-connect">
      <div className="connect">
        <form onSubmit={handleSubmit}>
          <div className="container-form-connect">
            <div className="form-group-user">
              <label htmlFor="username" className="username" id="label-connect">
                Nom d&#39;utilisateur
                <input
                  type="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  id="username"
                  placeholder="Entrer votre nom d'utilisateur"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group-password">
              <label htmlFor="password" className="password" id="label-connect">
                Mot de passe
                <input
                  type="password"
                  minLength="10"
                  id="password"
                  placeholder="Entrer votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
              </label>
            </div>
            <div className="button-connect">
              <ButtonDash className="validate" buttonName="Valider" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connect;
