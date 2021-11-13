import React from 'react';

import styles from './Hamburger-styles.module.css';

const Hamburger = ({ extended, setExtended }) => {
  return (
    <div className={`${styles.container} ${extended && styles.menuClose}`}>
      <span className={styles.one}></span>
      <span className={styles.two}></span>
      <span className={styles.three}></span>
    </div>
  );
};

export default Hamburger;
