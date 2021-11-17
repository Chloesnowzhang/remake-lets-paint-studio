import React from 'react';

import styles from './Contact-styles.module.css';

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.details}>
        <div className={styles.contact}>
          <span className="font-weight-bold">Contact</span>
          <span className={styles.btn}>CALL NOW</span>
          <span>0433 826 286</span>
        </div>
        <div className={styles.address}>
          <span className="font-weight-bold">Address</span>
          <span className={styles.btn}>GET DIRECTION</span>
          <address>
            <span>Studio</span>
            <span>94A Hawthorn Road</span>
            <span>Caulfield North VIC 3161</span>
            <span>Australia</span>
          </address>
        </div>
        <div className={styles.hours}>
          <span className="font-weight-bold">Business hours</span>
          <table>
            <tr>
              <th>Mon: </th>
              <td>10:00 AM – 5:00 PM</td>
            </tr>
            <tr>
              <th>Tue:</th>
              <td>Closed</td>
            </tr>
            <tr>
              <th>Wed: </th>
              <td>10:00 AM – 5:00 PM</td>
            </tr>
            <tr>
              <th>Thu: </th>
              <td>10:00 AM – 5:00 PM</td>
            </tr>
            <tr>
              <th>Fri: </th>
              <td>10:00 AM – 5:00 PM</td>
            </tr>
            <tr>
              <th>Sat: </th>
              <td>10:00 AM – 5:00 PM</td>
            </tr>
            <tr>
              <th>Sun: </th>
              <td>10:00 AM – 5:00 PM</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contact;
