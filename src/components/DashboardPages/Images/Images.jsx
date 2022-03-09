import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ButtonDash from '../../DashboardComposants/ButtonDash/ButtonDash';

import './Images.css';

function Images({ setDashboardTitle }) {
  const [images, setImages] = useState('');
  const [imagesName, setImagesName] = useState();
  const [addAt, setAddAt] = useState('');
  const [source, setSource] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeFile = (e) => {
    console.log(e);
    const selectedFile = e.target.files[0];
    const { type } = selectedFile;
    if (
      type !== 'image/png' &&
      type !== 'image/jpg' &&
      type !== 'image/jpeg' &&
      type !== 'image/svg'
    ) {
      setImages();
      alert('Veuillez sélectionner une image .png, .jpg, .jpeg, .svg');
    } else {
      setImages(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!images) {
      alert('Veuillez sélectionner une image .png, .jpg, .jpeg, .svg');
    } else if (!description) {
      alert('Veuillez fournir une description');
    } else {
      const data = new FormData();
      // Ajoute mon fichier image à mon FormData
      data.append('file', images);
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

  setDashboardTitle('Administration des Images');
  useEffect(() => {}, []);

  return (
    <div className="dashboard-images">
      <div className="images">
        <form onSubmit={handleSubmit}>
          <div className="container-form">
            <div className="images-upload">
              <label
                htmlFor="images-select"
                className="images-select"
                id="label-images"
              >
                Image
                <input
                  type="file"
                  name="upload"
                  id="images-upload"
                  placeholder="Sélectionner une image"
                  accept=".png, .jpg, .jpeg, .svg"
                  multiple
                  onChange={handleChangeFile}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="images-name"
                className="images-name"
                id="label-images"
              >
                Nom de l&#39;image
                <input
                  type="text"
                  name="name"
                  id="images-name"
                  placeholder="Nom de l'image"
                  value={imagesName}
                  onChange={(e) => setImagesName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="images-add-at"
                className="images-add-at"
                id="label-images"
              >
                Date d&#39;ajout de l&#39;image
                <input
                  type="date"
                  name="add-at"
                  id="images-add-at"
                  placeholder="Date d'ajout de l'image"
                  value={addAt}
                  onChange={(e) => setAddAt(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="images-source"
                className="images-source"
                id="label-images"
              >
                Lien d&#39;image
                <input
                  type="text"
                  name="source"
                  id="images-source"
                  placeholder="Lien de l'images"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </label>
            </div>
            <div>
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

export default Images;
