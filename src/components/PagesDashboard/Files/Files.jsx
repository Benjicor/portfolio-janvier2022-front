import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import moment from 'moment';

import Button from '../../Button/Button';

import './Files.css';

function Files({ setTitlePage }) {
  const [filesId, setFilesId] = useState();
  const [files, setFiles] = useState([]);
  const [filesName, setFilesName] = useState('');
  const [filesDateStart, setFilesDateStart] = useState('');
  const [filesDateEnd, setFilesDateEnd] = useState('');
  const [source, setSource] = useState('');
  const [description, setDescription] = useState('');

  // const handleChangeFile = (e) => {
  //   const selectedFile = e.target.files;
  //   [selectedFile].map((file, index) => {
  //     if (
  //       file[index].type !== 'image/png' &&
  //       file[index].type !== 'image/jpg' &&
  //       file[index].type !== 'image/jpeg' &&
  //       file[index].type !== 'image/svg+xml'
  //     ) {
  //       toast.warning(
  //         'Veuillez sélectionner une image .png, .jpg, .jpeg, .svg'
  //       );
  //     }
  //     return setImages([...selectedFile]);
  //   });
  // };

  const handleProject = (e) => {
    axios
      .get(
        `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/files/${e.target.value}`
      )
      .then((res) => {
        setFilesName(res.data.title);
        setFilesDateStart(moment(res.data.start_date).format('YYYY-MM-DD'));
        setFilesDateEnd(moment(res.data.end_date).format('YYYY-MM-DD'));
        setSource(res.data.src);
        setDescription(res.data.description);
        setFilesId(e.target.value);
      });
  };

  const getFiles = () => {
    axios
      .get(`${process.env.REACT_APP_API_PORTFOLIO_URL}/api/files`)
      .then((res) => {
        setFiles(res.data);
      });
  };

  const modifyFiles = () => {
    axios
      .put(
        `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/files/${filesId}`,
        {
          title: filesName,
          start_date: filesDateStart,
          end_date: filesDateEnd,
          src: source,
          description,
        },
        { withCredentials: true }
      )
      .then(() => {
        setFilesName('');
        setFilesDateStart('');
        setFilesDateEnd('');
        setSource('');
        setDescription('');
        setFilesId();
        getFiles();
        toast.success('Les données ont bien été modifiées');
      })
      .catch((err) => toast.error(err.message));
  };

  const deleteFiles = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/files/${filesId}`,
        { withCredentials: true }
      )
      .then(() => {
        toast.success('Les données ont bien été supprimées');
      })
      .catch((err) => toast.error(err.message));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_PORTFOLIO_URL}/api/files`, {
        title: filesName,
        start_date: filesDateStart,
        end_date: filesDateEnd,
        src: source,
        description,
      })
      .then(() => {
        setFilesName('');
        setFilesDateStart('');
        setFilesDateEnd('');
        setSource('');
        setDescription('');
        setFilesId();
        getFiles();
        toast.success('Les données ont bien été ajoutées');
      });
    // if (!images) {
    //   toast.warning('Veuillez sélectionner une image .png, .jpg, .jpeg, .svg');
    // } else if (!description) {
    //   toast.warning('Veuillez fournir une description');
    // } else {
    //   const data = new FormData();
    //   // Ajoute mon fichier image à mon FormData
    //   images.forEach((image) => {
    //     data.append('file', image);
    //   });
    //   // Ajoute les différentes valeurs attendu dans ma table images au FormData
    //   data.append('data', JSON.stringify({ description, files_id: filesId }));
    //   try {
    //     await axios
    //       .post(
    //         `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/images/upload`,
    //         data,
    //         { withCredentials: true }
    //       )
    //       .then(() => {
    //         setImages('');
    //         setSource('');
    //         setDescription('');
    //         getImages();
    //         toast.success('Votre ou vos image(s) ont bien été téléchargées');
    //       });
    //   } catch (err) {
    //     toast.error(err.message);
    //   }
    // }
  };

  useEffect(() => {
    getFiles();
    setTitlePage('Administration des Projets');
  }, []);

  return (
    <div className="dashboard-files">
      <div className="files">
        <form onSubmit={handleSubmit}>
          <div className="container-form">
            <label
              htmlFor="project-select"
              className="project-select"
              id="label-images"
            >
              Selectionner un projet
              <select
                name="files_id"
                id="project-select"
                onChange={handleProject}
              >
                <option value="">Selectionner un projet</option>
                {files?.map((file) => (
                  <option value={file.id} key={file.id}>
                    {file.title}
                  </option>
                ))}
              </select>
            </label>
            <div className="images-upload">
              {/* <label
                htmlFor="images-select"
                className="images-select"
                id="label-images"
              >
                Sélectionner une ou des image(s)
                <input
                  type="file"
                  name="upload"
                  id="images-select"
                  placeholder="Sélectionner une ou des image(s)"
                  accept=".png, .jpg, .jpeg, .svg+xml"
                  multiple
                  onChange={handleChangeFile}
                />
              </label> */}
            </div>
            <label htmlFor="files-name" className="files-name" id="label-files">
              Nom du projet
              <input
                type="text"
                id="files-name"
                placeholder="Nom du projet"
                value={filesName}
                onChange={(e) => setFilesName(e.target.value)}
              />
            </label>
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
            <ul className="grid-button-files">
              <li>
                <Button className="add" buttonName="Ajouter" submit />
              </li>
              <li>
                <Button
                  className="modify"
                  buttonName="Modifier"
                  onClick={modifyFiles}
                />
              </li>
              <li>
                <Button
                  className="delete"
                  buttonName="Supprimer"
                  onClick={deleteFiles}
                />
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Files;
