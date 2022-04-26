/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import './Projects.css';

function Projects({ setSiteTitle }) {
  const [files, setFiles] = useState([]);
  const [details, setDetails] = useState(false);
  useEffect(() => {
    setSiteTitle('Projets');
    (async () => {
      await axios
        .get(`${process.env.REACT_APP_API_PORTFOLIO_URL}/api/files`)
        .then((res) => {
          setFiles(res.data);
        });
    })();
  }, []);

  return (
    <div className="projects-page">
      <div className="projects">
        <h1 className="projects-title">Voici mes projets réalisés</h1>
        <Carousel
          autoPlay
          interval={2000}
          infiniteLoop
          thumbWidth={120}
          showIndicators={false}
          showStatus={false}
        >
          {files?.map((file) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div key={file.id} onClick={() => setDetails(true)}>
              <img
                src={`${process.env.REACT_APP_API_PORTFOLIO_URL}/images/${file.images[0].src}`}
                alt={file.alt}
              />
              <div className="overlay">
                <h2 className="overlay-title">{file.title}</h2>
                <p className="overlay-text">{file.description}</p>
              </div>
              {details &&
                file.images.map((image) => (
                  <img
                    src={`${process.env.REACT_APP_API_PORTFOLIO_URL}/images/${image.src}`}
                  />
                ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
