import React from 'react';

import styles from './Navbar-styles.module.css';
import Hamburger from './../displays/hamburger/Hamburger';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <span className={styles.hamburger}>
        <Hamburger />
      </span>
      <span className={styles.name}>Let's Paint Studio</span>
      <span className={styles.menu}>
        <span>Testimony</span>
        <span>Gallery</span>
        <span>Contact</span>
      </span>
    </div>
  );
};

export default Navbar;
