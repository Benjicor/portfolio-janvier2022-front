import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Projects.css';

function Projects({ setSiteTitle }) {
  const baseUrl = 'http://react-responsive-carousel.js.org/assets/';
  const datas = [
    {
      id: 1,
      image: `${baseUrl}1.jpeg`,
      title: 'Titre du slider 1',
      text: `Nous allons voir dans cette vidéo comment créer un carrousel d'images couramment appelé Slideshow ou Slider.`,
    },
    {
      id: 2,
      image: `${baseUrl}2.jpeg`,
      title: 'Titre du slider 2',
      text: `Nous allons voir dans cette vidéo comment créer un carrousel d'images couramment appelé Slideshow ou Slider.`,
    },
    {
      id: 3,
      image: `${baseUrl}3.jpeg`,
      title: 'Titre du slider 3',
      text: `Nous allons voir dans cette vidéo comment créer un carrousel d'images couramment appelé Slideshow ou Slider.`,
    },
  ];

  setSiteTitle('Projets');
  useEffect(() => {}, []);
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
          {datas.map((slide) => (
            <div key={slide.id}>
              <img src={slide.image} alt="" />
              <div className="overlay">
                <h2 className="overlay-title">{slide.title}</h2>
                <p className="overlay-text">{slide.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
