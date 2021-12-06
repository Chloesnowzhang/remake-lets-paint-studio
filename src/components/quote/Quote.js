import React, { useState } from 'react';

import styles from './Quote-styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Quote = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <FontAwesomeIcon icon="times" />
        <span>Get quote</span>
      </div>
      <form>
        <div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            value={name}
          />
          <label
            htmlFor="name"
            className={name.length > 0 ? styles.focused : ''}
          >
            Name
          </label>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            id="phone"
            value={phone}
          />
          <label
            htmlFor="phone"
            className={phone.length > 0 ? styles.focused : ''}
          >
            Phone number
          </label>
        </div>
        <div className={styles.email}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            value={email}
            required
          />
          <label
            htmlFor="email"
            className={email.length > 0 ? styles.focused : ''}
          >
            Email *
          </label>
          <span>*Valid email address required.</span>
        </div>
        <div className={styles.help}>
          <label htmlFor="equiry">How can we help you?</label>
          <textarea
            placeholder="I was wondering about availability and rates I need hep with the following:"
            id="enquiry"
          ></textarea>
        </div>
        <button type="submit">SUBMIT</button>
        <div>
          Make sure to avoid including any sensitive informaiton you don't want
          to share with teh business.
        </div>
      </form>
    </div>
  );
};

export default Quote;
