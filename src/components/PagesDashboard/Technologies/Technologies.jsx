import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import Button from '../../Button/Button';

import './Technologies.css';

function Technologies({ setTitlePage }) {
  const [technologiesId, setTechnologiesId] = useState();
  const [technologies, setTechnologies] = useState([]);
  const [technologiesName, setTechnologiesName] = useState('');
  const [source, setSource] = useState('');

  const handleTechnologies = (e) => {
    axios
      .get(
        `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/technologies/${e.target.value}`
      )
      .then((res) => {
        setTechnologiesName(res.data.name);
        setSource(res.data.src);
        setTechnologiesId(e.target.value);
      });
  };

  const getTechnologies = () => {
    axios
      .get(`${process.env.REACT_APP_API_PORTFOLIO_URL}/api/technologies`)
      .then((res) => {
        setTechnologies(res.data);
      });
  };

  const modifyTechnologies = () => {
    axios
      .put(
        `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/technologies/${technologiesId}`,
        {
          name: technologiesName,
          src: source,
        },
        { withCredentials: true }
      )
      .then(() => {
        toast.success('Les données ont bien été modifiées');
        setTechnologiesName('');
        setSource('');
        getTechnologies();
      })
      .catch((err) => toast.error(err.message));
  };

  const deleteTechnologies = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/technologies/${technologiesId}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        toast.success('Les données ont bien été supprimées');
      })
      .catch((err) => toast.error(err.message));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!technologiesName || !source) {
      toast.warning('Merci de remplir toutes les informations demandées');
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
          toast.error(err.message);
        });
    }
  };

  useEffect(() => {
    getTechnologies();
    setTitlePage('Administration des Technologies');
  }, []);

  return (
    <div className="dashboard-technologies">
      <h1 className="technologies-title">
        Ajouter, modifier ou supprimer
        <br />
        une Technologie
      </h1>
      <div className="container-technologies">
        <div className="technologies">
          <form onSubmit={handleSubmit}>
            <div className="container-form">
              <label
                htmlFor="project-select"
                className="project-select"
                id="label-images"
              >
                Sélectionner une technologie
                <select
                  name="files_id"
                  id="project-select"
                  onChange={handleTechnologies}
                >
                  <option value="">Sélectionner une technologie</option>
                  {technologies?.map((technologie) => (
                    <option value={technologie.id} key={technologie.id}>
                      {technologie.name}
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
                <ul className="grid-button-technologies">
                  <li>
                    <Button className="add" buttonName="Ajouter" submit />
                  </li>
                  <li>
                    <Button
                      className="modify"
                      buttonName="Modifier"
                      onClick={modifyTechnologies}
                    />
                  </li>
                  <li>
                    <Button
                      className="delete"
                      buttonName="Supprimer"
                      onClick={deleteTechnologies}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
