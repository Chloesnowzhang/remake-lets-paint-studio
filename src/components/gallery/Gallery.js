import React from 'react';
import ImageSlider from '../utils/imageSlider/ImageSlider';

import styles from './Gallery-styles.module.css';

const Gallery = () => {
  return (
    <section className={styles.container}>
      <div className={styles.name}>GALLERY</div>
      <ImageSlider />
      <div>More photoes</div>
    </section>
  );
};

export default Gallery;
