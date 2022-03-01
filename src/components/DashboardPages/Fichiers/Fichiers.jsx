import React, { useEffect, useState } from 'react';

import ButtonDash from '../../DashboardComposants/ButtonDash/ButtonDash';

import './Fichiers.css';

function Fichiers({ setDashboardTitle }) {
  const [files, setFiles] = useState('');
  const [filesName, setFilesName] = useState('');
  const [filesDate, setFilesDate] = useState('');
  const [addAt, setAddAt] = useState('');
  const [source, setSource] = useState('');
  const [description, setDescription] = useState('');

  setDashboardTitle('Administration des Fichiers');
  useEffect(() => {}, []);

  return (
    <div className="dashboard-fichiers">
      <div className="fichiers">
        <form>
          <div className="container-form">
            <div className="files-upload">
              <label htmlFor="files-select" className="files-select">
                <input
                  type="file"
                  id="files-upload"
                  placeholder="Sélectionner un fichier"
                  accept=".pdf"
                  multiple
                  value={files}
                  onChange={(e) => setFiles(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="files-name" className="files-name">
                <input
                  type="text"
                  id="files-name"
                  placeholder="Nom du fichier"
                  value={filesName}
                  onChange={(e) => setFilesName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="files-date" className="files-date">
                <input
                  type="date"
                  id="files-date"
                  placeholder="Date de réalisation du fichier"
                  value={filesDate}
                  onChange={(e) => setFilesDate(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="files-add-at" className="files-add-at">
                <input
                  type="date"
                  id="files-add-at"
                  placeholder="Date d'ajout du fichier"
                  value={addAt}
                  onChange={(e) => setAddAt(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="files-source" className="files-source">
                <input
                  type="text"
                  id="files-source"
                  placeholder="Lien du fichier"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="files-description" className="files-description">
                <textarea
                  type="text"
                  rows={10}
                  id="files-description"
                  placeholder="Description du fichier"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>
            <ul className="grid-button">
              <li>
                <ButtonDash className="add" buttonName="Ajouter" />
              </li>
              <li>
                <ButtonDash className="modify" buttonName="Modifier" />
              </li>
              <li>
                <ButtonDash className="delete" buttonName="Supprimer" />
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Fichiers;
