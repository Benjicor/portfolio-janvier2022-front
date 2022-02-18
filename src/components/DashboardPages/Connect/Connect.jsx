import React, { useEffect, useState } from 'react';

import Button from '../../DashboardComposants/Button/Button';

import './Connect.css';

function Connect({ setDashboardTitle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    setDashboardTitle('Administration');
  }, []);
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
              <Button className="validate" buttonName="Valider" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connect;
