/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import './ModalSwiper.css';
import 'swiper/css';

function Modal({ closeModal, project }) {
  return (
    <div className="container-modal-swiper">
      <div className="close-btn-modal-swiper">
        <button
          type="button"
          className="x-btn"
          onClick={() => closeModal(false)}
        >
          X
        </button>
      </div>
      <div className="container-my-swiper-modal">
        <Swiper
          className="container-mySwiper"
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
          {project.images?.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="swiper-overlay-images">
                <img
                  className="image-src"
                  src={`${process.env.REACT_APP_API_PORTFOLIO_URL}/images/${image.src}`}
                  alt={image.alt}
                />
                <div className="overlay-image">
                  <h2 className="overlay-title">{image.title}</h2>
                  <p className="overlay-decription">{image.description}</p>
                  <a
                    className="overlay-image-link"
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Projet en ligne
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Modal;
