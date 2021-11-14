import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Navbar-styles.module.css';
import Hamburger from '../../../utils/hamburger/Hamburger';

const Navbar = ({ extended, setExtended }) => {
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
        <span>Get Quote</span>
      </div>
      <div className={styles.menuItem}>
        <span>
          <FontAwesomeIcon icon="phone-alt" />
        </span>
        <span>Call Now</span>
      </div>
      <div className={styles.menuItem}>
        <span>
          <FontAwesomeIcon icon="directions" />
        </span>
        <span>Get Directions</span>
      </div>
    </div>
  );
};

export default Navbar;
