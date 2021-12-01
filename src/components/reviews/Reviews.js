import React from 'react';

import styles from './Reviews-styles.module.css';

const Reviews = () => {
  return (
    <section className={styles.container}>
      <span className="clickable">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/search?q=lets+paint+studio&rlz=1C1CHBF_en-GBAU742AU742&oq=let&aqs=chrome.0.69i59j69i57j69i59j69i60l5.3437j0j4&sourceid=chrome&ie=UTF-8#lrd=0x6ad669824e99b511:0x3cc5c2a5d60df4b5,3"
        >
          WRITE A REVIEW
        </a>
      </span>
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/search?hl=en-AU&gl=au&q=Let%E2%80%99s+Paint+Studio,+Studio,+94A+Hawthorn+Rd,+Caulfield+North+VIC+3161&ludocid=4379120230204306613&lsig=AB86z5WpYWMFQvS8hNYsteGeXmWt#lrd=0x6ad669824e99b511:0x3cc5c2a5d60df4b5,1"
        >
          MORE REVIEWS
        </a>
      </span>
    </section>
  );
};

export default Reviews;
