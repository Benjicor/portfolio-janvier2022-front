import React, { useEffect, useState } from 'react';

import Button from '../../DashboardComposants/Button/Button';

import './Fichiers.css';

function Fichiers({ setDashboardTitle }) {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileDate, setFileDate] = useState('');
  const [addAt, setAddAt] = useState('');
  const [source, setSource] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    setDashboardTitle('Administration des Fichiers');
  }, []);
  return (
    <div className="dashboard-fichiers">
      <div className="fichiers">
        <form>
          <div className="container-form">
            <div className="file-upload">
              <label htmlFor="file-select" className="file-select">
                <input
                  type="button"
                  className="upload-button"
                  value="Consulter"
                />
                <input
                  type="file"
                  id="file-upload"
                  placeholder="Sélectionner un fichier"
                  value={file}
                  onChange={(e) => setFile(e.target.value)}
                />
                <span className="file-name-button">
                  Sélectionner un fichier
                </span>
              </label>
            </div>
            <input
              type="button"
              className="upload-button"
              value="Télécharger un fichier"
            />
            <div>
              <label htmlFor="file-name" className="file-name">
                <input
                  type="text"
                  id="file-name"
                  placeholder="Nom du fichier"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="file-date" className="file-date">
                <input
                  type="date"
                  id="file-date"
                  placeholder="Date de réalisation du fichier"
                  value={fileDate}
                  onChange={(e) => setFileDate(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="file-add-at" className="file-add-at">
                <input
                  type="date"
                  id="file-add-at"
                  placeholder="Date d'ajout du fichier"
                  value={addAt}
                  onChange={(e) => setAddAt(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="file-source" className="file-source">
                <input
                  type="text"
                  id="file-source"
                  placeholder="Lien du fichier"
                  ource
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="file-description" className="file-description">
                <input
                  type="text"
                  id="file-description"
                  placeholder="Description du fichier"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="button">
            <Button className="add" buttonName="Ajouter" />
            <Button className="modify" buttonName="Modifier" />
            <Button className="delete" buttonName="Supprimer" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Fichiers;
