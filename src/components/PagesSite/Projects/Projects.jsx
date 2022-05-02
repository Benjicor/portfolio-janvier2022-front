/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import axios from 'axios';
import './Projects.css';

function Projects({ setTitlePage }) {
  const [files, setFiles] = useState([]);
  const [details, setDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const handleClick = (e, index) => {
    setSelectedProject(files[index]);
  };
  useEffect(() => {
    setTitlePage('Projets');
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
      <h1 className="projects-title">Voici mes projets réalisés</h1>
      <div className="carousel-slider-projects">
        <Swiper
          className="mySwiper-container"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay
          loop
          centeredSlides={false}
          speed={700}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {files?.map((file, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <SwiperSlide>
              <div
                className="swiper-overlay-project"
                key={file.id}
                onClick={() => setDetails(true)}
              >
                <img
                  className="project-src"
                  src={`${process.env.REACT_APP_API_PORTFOLIO_URL}/images/${file.images[0].src}`}
                  alt={file.alt}
                  onClick={(e) => handleClick(e, index)}
                />
                <div className="overlay-project">
                  <h2 className="overlay-title">{file.title}</h2>
                  <p className="overlay-decription">{file.description}</p>
                  <a
                    className="overlay-project-link"
                    href={file.src}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lien du Projet déployé
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {details &&
            selectedProject.images.map((image) => (
              <div className="selected-project-container">
                <img
                  className="selected-project-img"
                  src={`${process.env.REACT_APP_API_PORTFOLIO_URL}/images/${image.src}`}
                  key={image.id}
                />
              </div>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
