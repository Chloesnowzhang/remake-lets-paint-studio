import React from 'react';

import styles from './TopSection-styles.module.css';
import HeaderImg from './headerImg/HeaderImg';

const TopSection = ({ setClose }) => {
  return (
    <section className={styles.container}>
      <div>
        <HeaderImg />
      </div>
      <div>
        <div className={styles.name}>Let's Paint Studio</div>
        <div className={styles.notif}>Corporate Office in Caulfuield North</div>
        <div className={styles.notif}>Open today until 5:00 PM</div>
        <div
          className={`${styles.quote} clickable`}
          onClick={() => setClose(false)}
        >
          GET QUOTE
        </div>
      </div>
    </section>
  );
};

export default TopSection;
