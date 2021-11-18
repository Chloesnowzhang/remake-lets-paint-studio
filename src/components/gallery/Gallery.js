import React from 'react';
import ImageSlider from '../utils/imageSlider/ImageSlider';

import styles from './Gallery-styles.module.css';
import GalleryImages from './GalleryImages';

const Gallery = () => {
  return (
    <section className={styles.container}>
      <div className={`section-title`}>GALLERY</div>
      <div className={styles.gallerySlider}>
        <ImageSlider />
      </div>

      <div className={styles.galleryImages}>
        <GalleryImages />
      </div>
      <div className={styles.more}>
        <a
          href="https://www.google.com/maps/uv?pb=!1s0x6ad669824e99b511%3A0x3cc5c2a5d60df4b5!3m1!7e131!5sLet%E2%80%99s%20Paint%20Studio!15sCgIgAQ&hl=en&imagekey=!1e3!2s-ypLqjv1zMyI%2FYNsU2vwNsiI%2FAAAAAAAAADY%2FTVOx1tsesrY4qz9Uwrm4NkV1agN7naHQgCNwBGAYYCw"
          target="_blank"
        >
          More photoes
        </a>
      </div>
    </section>
  );
};

export default Gallery;
