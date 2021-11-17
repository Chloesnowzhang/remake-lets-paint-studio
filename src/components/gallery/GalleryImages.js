import React from 'react';

import { images } from '../utils/imageSlider/slideData';
import styles from './GalleryImages-styles.module.css';

const GalleryImages = () => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <div className={styles.pictureContainer}>
          <picture key={index} className={`${styles['picture' + index]}`}>
            <source srcSet={image.lgImg} media="(min-width: 768px)" />
            <img alt="Business" src={image.smImg} />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default GalleryImages;
