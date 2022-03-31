import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '../../Button/Button';

import './Files.css';

function Files({ setDashboardTitle }) {
  const [files, setFiles] = useState('');
  const [filesName, setFilesName] = useState('');
  const [filesDateStart, setFilesDateStart] = useState('');
  const [filesDateEnd, setFilesDateEnd] = useState('');
  const [source, setSource] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeFile = (e) => {
    console.log(e);
    const selectedFile = e.target.files[0];
    const { type } = selectedFile;
    if (type !== 'fichier/pdf') {
      setFiles();
      alert('Veuillez sélectionner un fichier .pdf');
    } else {
      setFiles(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files) {
      alert('Veuillez sélectionner un fichier .pdf');
    } else if (!description) {
      alert('Veuillez fournir une description');
    } else {
      const data = new FormData();
      // Ajoute mon fichier pdf à mon FormData
      data.append('file', files);
      // Ajoute la description au FormData
      data.append('pictureData', JSON.stringify({ description }));
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/images/upload`,
          data
        );
        console.log(res);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    setDashboardTitle('Administration des Projets');
  }, []);

  return (
    <div className="dashboard-files">
      <div className="files">
        <form onSubmit={handleSubmit}>
          <div className="container-form">
            <div className="files-upload">
              <label
                htmlFor="files-select"
                className="files-select"
                id="label-files"
              >
                Sélectionner les images du projet
                <input
                  type="file"
                  name="upload"
                  id="files-select"
                  placeholder="Sélectionner un fichier"
                  accept=".pdf"
                  multiple
                  onChange={handleChangeFile}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="files-name"
                className="files-name"
                id="label-files"
              >
                Nom du projet
                <input
                  type="text"
                  id="files-name"
                  placeholder="Nom du projet"
                  value={filesName}
                  onChange={(e) => setFilesName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="files-start-date"
                className="files-start-date"
                id="label-files"
              >
                Date de début de réalisation du projet
                <input
                  type="date"
                  id="files-start-date"
                  placeholder="Date de début de réalisation du projet"
                  value={filesDateStart}
                  onChange={(e) => setFilesDateStart(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="files-end-date"
                className="files-end-date"
                id="label-files"
              >
                Date de fin de réalisation du projet
                <input
                  type="date"
                  id="files-end-date"
                  placeholder="Date de fin de réalisation du projet"
                  value={filesDateEnd}
                  onChange={(e) => setFilesDateEnd(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="files-source"
                className="files-source"
                id="label-files"
              >
                Lien du projet en ligne
                <input
                  type="text"
                  id="files-source"
                  placeholder="Lien du projet en ligne"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="files-description"
                className="files-description"
                id="label-files"
              >
                Déscription du projet
                <textarea
                  type="text"
                  rows={10}
                  id="files-description"
                  placeholder="Description du projet"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>
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
        </form>
      </div>
    </div>
  );
}

export default Files;
