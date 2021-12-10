import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './BottomActionList-styles.module.css';

const BottomActionList = ({ setClose }) => {
  return (
    <div className={styles.container}>
      <span className="clickable" onClick={() => setClose(false)}>
        <span>
          <FontAwesomeIcon icon="sticky-note" />
        </span>
        <span>Quote</span>
      </span>
      <span>
        <a href="tel:+61-433-826-686" target="_blank" rel="noreferrer">
          <span>
            <FontAwesomeIcon icon="phone-alt" />
          </span>
          <span>Call</span>
        </a>
      </span>
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/Let%E2%80%99s+Paint+Studio/@-37.872142,145.024203,16z/data=!4m5!3m4!1s0x0:0x3cc5c2a5d60df4b5!8m2!3d-37.872142!4d145.0242029?hl=en-GB"
        >
          <span>
            <FontAwesomeIcon icon="directions" />
          </span>
          <span>Directions</span>
        </a>
      </span>
    </div>
  );
};

export default BottomActionList;
