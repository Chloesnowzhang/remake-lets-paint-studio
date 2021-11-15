import React from 'react';

import images from './images';
import styles from './Gallery-styles.module.css';

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>GALLERY</div>
      <div className={styles.images}>
        {images.map((image) => (
          <picture key={image.id} className={`${styles['img' + image.id]}`}>
            <source srcSet={image.lgUrl} media="(min-width: 768px)" />
            <img alt="Business photo" src={image.smUrl} />
          </picture>
        ))}
      </div>

      <div>More photoes</div>
    </div>
  );
};

export default Gallery;
