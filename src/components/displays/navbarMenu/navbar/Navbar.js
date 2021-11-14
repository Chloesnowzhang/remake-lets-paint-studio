import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Navbar-styles.module.css';
import Hamburger from '../../../utils/hamburger/Hamburger';

const Navbar = ({ extended, setExtended }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.hamburger}>
          <Hamburger extended={extended} setExtended={setExtended} />
        </div>
        <div className={styles.name}>Let's Paint Studio</div>
      </div>

      <div className={styles.menu}>
        <span>
          <span>
            <FontAwesomeIcon icon="sticky-note" />
          </span>
          <span>Get Quote</span>
        </span>
        <span>
          <span>
            <FontAwesomeIcon icon="phone-alt" />
          </span>
          <span>Call Now</span>
        </span>
        <span>
          <span>
            <FontAwesomeIcon icon="directions" />
          </span>
          <span>Get Directions</span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
