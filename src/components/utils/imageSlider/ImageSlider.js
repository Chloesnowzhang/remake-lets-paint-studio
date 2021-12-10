import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ImageSlider-styles.module.css';
import { images } from './slideData';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const slideNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const slidePrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={`${styles.slides} ${styles[`breakpoint` + current]}`}>
          {images.map((image, index) => (
            <picture key={index}>
              <source srcSet={image.lgImg} media="(min-width: 768px)" />
              <img alt="Business" src={image.smImg} />
            </picture>
          ))}
        </div>
        <div className={styles.leftArr} onClick={slidePrev}>
          <FontAwesomeIcon icon="leaf" />
        </div>
        <div className={styles.rightArr} onClick={slideNext}>
          <FontAwesomeIcon icon="leaf" />
        </div>
      </div>

      <div className={styles.leftArr2} onClick={slidePrev}>
        <FontAwesomeIcon icon="leaf" />
      </div>
      <div className={styles.rightArr2} onClick={slideNext}>
        <FontAwesomeIcon icon="leaf" />
      </div>
    </div>
  );
};

export default ImageSlider;
