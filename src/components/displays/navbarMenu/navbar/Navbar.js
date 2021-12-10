import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Navbar-styles.module.css';
import Hamburger from '../../../utils/hamburger/Hamburger';

const Navbar = ({ extended, setExtended, setClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>
        <Hamburger extended={extended} setExtended={setExtended} />
      </div>
      <div className={styles.name}>Let's Paint Studio</div>

      <div className={styles.menuItem}>
        <span>
          <FontAwesomeIcon icon="sticky-note" />
        </span>
        <span
          className="clickable"
          onClick={() => {
            setClose(false);
          }}
        >
          Get Quote
        </span>
      </div>
      <div className={styles.menuItem}>
        <span>
          <FontAwesomeIcon icon="phone-alt" />
        </span>
        <span>
          <a href="tel:+61-433-826-686" target="_blank" rel="noreferrer">
            Call Now
          </a>
        </span>
      </div>
      <div className={styles.menuItem}>
        <span>
          <FontAwesomeIcon icon="directions" />
        </span>
        <span className="clickable">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Let%E2%80%99s+Paint+Studio/@-37.872142,145.024203,16z/data=!4m5!3m4!1s0x0:0x3cc5c2a5d60df4b5!8m2!3d-37.872142!4d145.0242029?hl=en-GB"
          >
            Get Directions
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
