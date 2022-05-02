import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Button from '../../Button/Button';

import './Images.css';

function Images({ setTitlePage }) {
  const [images, setImages] = useState('');
  const [files, setFiles] = useState([]);
  const [filesId, setFilesId] = useState();
  const [source, setSource] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeFile = (e) => {
    const selectedFile = e.target.files;
    [selectedFile].map((file, index) => {
      if (
        file[index].type !== 'image/png' &&
        file[index].type !== 'image/jpg' &&
        file[index].type !== 'image/jpeg' &&
        file[index].type !== 'image/svg+xml' &&
        file[index].type !== 'application/pdf'
      ) {
        alert('Veuillez sélectionner une image .png, .jpg, .jpeg, .svg, .pdf');
      }
      return setImages([...selectedFile]);
    });
  };

  const handleProject = (e) => {
    axios
      .get(
        `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/images/${e.target.value}`
      )
      .then((res) => {
        setSource([res.data.src]);
        setDescription([res.data.description]);
        setFilesId(e.target.value);
      });
  };

  const getImages = () => {
    axios
      .get(`${process.env.REACT_APP_API_PORTFOLIO_URL}/api/images`)
      .then((res) => {
        setImages(res.data);
      });
  };

  const modify = async (e) => {
    e.preventDefault();

    if (!images) {
      alert('Veuillez sélectionner une image .png, .jpg, .jpeg, .svg, .pdf');
    } else if (!description) {
      alert('Veuillez fournir une description');
    } else {
      const data = new FormData();
      // Ajoute mon fichier image à mon FormData
      images.forEach((image) => {
        data.append('file', image);
      });
      // Ajoute les différentes valeurs attendu dans ma table images au FormData
      data.append('data', JSON.stringify({ description, files_id: filesId }));
      try {
        await axios
          .post(
            `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/images/upload`,
            data,
            { withCredentials: true }
          )
          .then(() => {
            setImages('');
            setSource('');
            setDescription('');
            getImages();
          });
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!images) {
      alert('Veuillez sélectionner une image .png, .jpg, .jpeg, .svg, .pdf');
    } else if (!description) {
      alert('Veuillez fournir une description');
    } else {
      const data = new FormData();
      // Ajoute mon fichier image à mon FormData
      images.forEach((image) => {
        data.append('file', image);
      });
      // Ajoute les différentes valeurs attendu dans ma table images au FormData
      data.append('data', JSON.stringify({ description, files_id: filesId }));
      try {
        await axios
          .post(
            `${process.env.REACT_APP_API_PORTFOLIO_URL}/api/images/upload`,
            data,
            { withCredentials: true }
          )
          .then(() => {
            setImages('');
            setSource('');
            setDescription('');
            getImages();
          });
      } catch (err) {
        alert(err.message);
      }
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
    setTitlePage('Administration des Images');
  }, []);

  return (
    <div className="dashboard-images">
      <div className="images">
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
                <option value="" selected>
                  Choisir un projet
                </option>
                {files?.map((file) => (
                  <option value={file.id}>{file.title}</option>
                ))}
              </select>
            </label>
            <div className="images-upload">
              <label
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
                  accept=".png, .jpg, .jpeg, .svg+xml, .pdf"
                  multiple
                  onChange={handleChangeFile}
                />
              </label>
            </div>
            <label
              htmlFor="images-source"
              className="images-source"
              id="label-images"
            >
              Lien de l&#39;image en ligne
              <input
                type="text"
                name="source"
                id="images-source"
                placeholder="Lien de l'image en ligne"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </label>
            <label
              htmlFor="images-description"
              className="images-description"
              id="label-images"
            >
              Déscription de l&#39;image
              <textarea
                type="text"
                name="description"
                rows={10}
                id="images-description"
                placeholder="Description de l'image"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <ul className="grid-button">
              <li>
                <Button className="add" buttonName="Ajouter" submit />
              </li>
              <li>
                <Button
                  className="modify"
                  buttonName="Modifier"
                  submit
                  onClick={modify}
                />
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

export default Images;
