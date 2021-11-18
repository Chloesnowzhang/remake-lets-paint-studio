import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Testimonials-styles.module.css';

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <div className={`section-title`}>TESTIMONIALS</div>
      <div className={styles.review}>
        <div className={styles.stars}>
          <span>
            <FontAwesomeIcon icon="star" />
          </span>
          <span>
            <FontAwesomeIcon icon="star" />
          </span>
          <span>
            <FontAwesomeIcon icon="star" />
          </span>
          <span>
            <FontAwesomeIcon icon="star" />
          </span>
          <span>
            <FontAwesomeIcon icon="star" />
          </span>
          <span>7 months ago</span>
        </div>
        <div className={styles.quote}>
          <blockquote>
            <q>
              One of the best to spend for the weekend. Enjoy the painting and
              enjoy life.
            </q>
          </blockquote>
          <cite>-Li L</cite>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
