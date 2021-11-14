import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './BottomActionList-styles.module.css';

const BottomActionList = () => {
  return (
    <div className={styles.container}>
      <span>
        <span>
          <FontAwesomeIcon icon="sticky-note" />
        </span>
        <span>Quote</span>
      </span>
      <span>
        <span>
          <FontAwesomeIcon icon="phone-alt" />
        </span>
        <span>Call</span>
      </span>
      <span>
        <span>
          <FontAwesomeIcon icon="directions" />
        </span>
        <span>Directions</span>
      </span>
    </div>
  );
};

export default BottomActionList;
