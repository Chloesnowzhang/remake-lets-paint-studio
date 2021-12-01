import React from 'react';

import styles from './DropdownMenu-styles.module.css';

const DropdownMenu = ({ extended }) => {
  return (
    <div
      className={`${extended ? styles.containerExtended : styles.container}`}
    >
      <span>
        <a href="#testimonials">Testimonials</a>
      </span>
      <span>
        <a href="#gallery">Gallery</a>
      </span>
      <span>
        <a href="#contact">Contact</a>
      </span>
    </div>
  );
};

export default DropdownMenu;
