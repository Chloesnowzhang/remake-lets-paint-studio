import React from 'react';

import styles from './Contact-styles.module.css';
import Frame from './Frame';

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={`section-title`}>CONTACT US</div>
      <div className={styles.map}>
        <Frame />
      </div>
      <div className={styles.details}>
        <div className={styles.contact}>
          <span className="font-weight-bold">Contact</span>
          <a href="tel:+61-433-826-686" target="_blank" rel="noreferrer">
            <span className={styles.btn}>CALL NOW</span>
          </a>
          <span>0433 826 286</span>
        </div>
        <div className={styles.address}>
          <span className="font-weight-bold">Address</span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Let%E2%80%99s+Paint+Studio/@-37.872142,145.024203,16z/data=!4m5!3m4!1s0x0:0x3cc5c2a5d60df4b5!8m2!3d-37.872142!4d145.0242029?hl=en-GB"
          >
            <span className={styles.btn}>GET DIRECTION</span>
          </a>
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
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contact;
