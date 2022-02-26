import React, { useEffect, useState } from 'react';

import ButtonDash from '../../DashboardComposants/ButtonDash/ButtonDash';

import './Connect.css';

function Connect({ setDashboardTitle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  setDashboardTitle('Administration');
  useEffect(() => {}, []);
  return (
    <div className="dashboard-connect">
      <div className="connect">
        <form>
          <div className="container-form-connect">
            <div className="form-group-user">
              <h2>Nom d&#39;utilisateur</h2>
              <label htmlFor="user-name" className="user-name">
                <input
                  type="text"
                  id="user-name"
                  placeholder="Entrer votre e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group-password">
              <h2>Mot de passe</h2>
              <label htmlFor="password" className="password">
                <input
                  type="text"
                  id="password"
                  placeholder="Entrer votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
