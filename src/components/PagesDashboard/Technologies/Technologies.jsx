import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '../../Button/Button';

import './Technologies.css';

function Technologies({ setTitlePage }) {
  const [/* filesId, */ setFilesId] = useState();
  const [files, setFiles] = useState([]);
  // const [technologies, setTechnologies] = useState('');
  const [technologiesName, setTechnologiesName] = useState('');
  const [source, setSource] = useState('');

  const handleProject = (e) => {
    setFilesId(parseInt(e.target.value, 10));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!technologiesName || !source) {
      alert('Merci de remplir toutes les informations demandées');
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/technologies`,
          { name: technologiesName, src: source },
          { withCredentials: true }
        )
        .then(() => {
          setTechnologiesName('');
          setSource('');
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  useEffect(() => {
    (async () => {
      axios
        .get(`${process.env.REACT_APP_API_PORTFOLIO_URL}/api/files`)
        .then((res) => {
          setFiles(res.data);
        });
    })();
    setTitlePage('Administration des Technologies');
  }, []);

  return (
    <div className="dashboard-technologies">
      <div className="technologies">
        <form onSubmit={handleSubmit}>
          <div className="container-form">
            <label
              htmlFor="project-select"
              className="project-select"
              id="label-images"
            >
              Sélectionner un projet
              <select
                name="files_id"
                id="project-select"
                onChange={handleProject}
              >
                <option value="">Choisir un projet</option>
                {files?.map((file) => (
                  <option value={file.id} key={file.id}>
                    {file.title}
                  </option>
                ))}
              </select>
            </label>
            <div className="technologies-upload">
              {/* <label
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
              </label> */}
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
