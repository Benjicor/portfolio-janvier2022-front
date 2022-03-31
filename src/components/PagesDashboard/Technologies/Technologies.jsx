import React, { useEffect, useState } from 'react';

import Button from '../../Button/Button';

import './Technologies.css';

function Technologies({ setDashboardTitle }) {
  const [technologies, setTechnologies] = useState('');
  const [technologiesName, setTechnologiesName] = useState('');
  const [source, setSource] = useState('');

  useEffect(() => {
    setDashboardTitle('Administration des Technologies');
  }, []);

  return (
    <div className="dashboard-technologies">
      <div className="technologies">
        <form>
          <div className="container-form">
            <div className="technologies-upload">
              <label
                htmlFor="technologies-select"
                className="technologies-select"
                id="label-technologies"
              >
                Sélectionner une technologie
                <input
                  type="file"
                  id="technologies-upload"
                  placeholder="Sélectionner une technologie"
                  accept=".svg"
                  multiple
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="technologies-name"
                className="technologies-name"
                id="label-technologies"
              >
                Nom de la technologie
                <input
                  type="text"
                  id="technologies-name"
                  placeholder="Nom de la technologie"
                  value={technologiesName}
                  onChange={(e) => setTechnologiesName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="technologies-source"
                className="technologies-source"
                id="label-technologies"
              >
                Lien de la technologie en ligne
                <input
                  type="text"
                  id="technologies-source"
                  placeholder="Lien de la technologie en ligne"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </label>
            </div>
            <div className="button-technologies">
              <ul className="grid-button">
                <li>
                  <Button className="add" buttonName="Ajouter" submit />
                </li>
                <li>
                  <Button className="modify" buttonName="Modifier" submit />
                </li>
                <li>
                  <Button className="delete" buttonName="Supprimer" submit />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Technologies;
