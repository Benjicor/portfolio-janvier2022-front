import React, { useEffect, useState } from 'react';

import Button from '../../DashboardComposants/Button/Button';

import './Images.css';

function Images({ setDashboardTitle, alt }) {
  const [image, setImage] = useState('');
  const [imageName, setImageName] = useState('');
  const [addAt, setAddAt] = useState('');
  const [source, setSource] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    setDashboardTitle('Administration des Images');
  }, []);
  return (
    <div className="dashboard-images">
      <div className="images">
        <form>
          <div className="container-form">
            <div className="image-upload">
              <label htmlFor="image-select" className="image-select">
                <input
                  type="button"
                  className="upload-button"
                  value="Consulter"
                />
                <input
                  type="image"
                  alt={alt}
                  id="image-upload"
                  placeholder="Sélectionner une image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <span className="image-name-button">
                  Sélectionner une image
                </span>
              </label>
            </div>
            <input
              type="button"
              className="upload-button"
              value="Télécharger une image"
            />
            <div>
              <label htmlFor="image-name" className="image-name">
                <input
                  type="text"
                  id="file-name"
                  placeholder="Nom de l'image"
                  value={imageName}
                  onChange={(e) => setImageName(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="image-add-at" className="image-add-at">
                <input
                  type="date"
                  id="image-add-at"
                  placeholder="Date d'ajout de l'image"
                  value={addAt}
                  onChange={(e) => setAddAt(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="image-source" className="image-source">
                <input
                  type="text"
                  id="image-source"
                  placeholder="Lien de l'image"
                  ource
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="image-description" className="image-description">
                <input
                  type="text"
                  id="image-description"
                  placeholder="Description de l'image"
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

export default Images;
