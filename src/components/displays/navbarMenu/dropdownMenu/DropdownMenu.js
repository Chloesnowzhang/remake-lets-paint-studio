import React from 'react';

import styles from './DropdownMenu-styles.module.css';

const DropdownMenu = () => {
  return (
    <div className={styles.container}>
      <span>Testimony</span>
      <span>Gallery</span>
      <span>Contact</span>
    </div>
  );
};

export default DropdownMenu;
