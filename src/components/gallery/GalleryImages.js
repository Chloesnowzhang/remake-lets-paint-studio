import React from 'react';

import { images } from '../utils/imageSlider/slideData';
import styles from './GalleryImages-styles.module.css';

const GalleryImages = () => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <div className={styles.pictureContainer} key={index}>
          <picture className={`${styles['picture' + index]}`}>
            <img alt={image.title} src={image.img} />
          </picture>
        </div>
      ))}
    </div>
  );
};

export default GalleryImages;
