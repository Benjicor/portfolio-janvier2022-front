import React, { useEffect, useState } from 'react';

import ButtonDash from '../../DashboardComposants/ButtonDash/ButtonDash';

import './Images.css';

function Images({ setDashboardTitle }) {
  const [images, setImages] = useState('');
  const [imagesName, setImagesName] = useState('');
  const [addAt, setAddAt] = useState('');
  const [source, setSource] = useState('');
  const [description, setDescription] = useState('');
  setDashboardTitle('Administration des Images');
  useEffect(() => {}, []);
  return (
    <div className="dashboard-images">
      <div className="images">
        <form>
          <div className="container-form">
            <div className="images-upload">
              <label htmlFor="images-select" className="images-select">
                <input
                  type="file"
                  id="images-upload"
                  placeholder="Sélectionner une image"
                  accept=".jpg, .jpeg, .png, .svg"
                  multiple
                  value={images}
                  onChange={(e) => setImages(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="images-name" className="images-name">
                <input
                  type="text"
                  id="images-name"
                  placeholder="Nom de l'image"
                  value={imagesName}
                  onChange={(e) => setImagesName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="images-add-at" className="images-add-at">
                <input
                  type="date"
                  id="images-add-at"
                  placeholder="Date d'ajout de l'image"
                  value={addAt}
                  onChange={(e) => setAddAt(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="images-source" className="images-source">
                <input
                  type="text"
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
              >
                <textarea
                  type="text"
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
