import React, { useState } from 'react';

import styles from './Quote-styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from '../utils/form/Input';

const Quote = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <FontAwesomeIcon icon="times" />
        <span>Get quote</span>
      </div>
      <form>
        <div>
          <Input
            type="text"
            name="name"
            label="Name"
            inputText={username}
            setInputText={setUsername}
            className={username.length > 0 ? styles.focused : ''}
          />
        </div>
        <div>
          <Input
            type="text"
            name="phone"
            label="Phone number"
            inputText={phone}
            setInputText={setPhone}
            className={phone.length > 0 ? styles.focused : ''}
          />
        </div>
        <div className={styles.email}>
          <Input
            type="email"
            name="email"
            label="Email *"
            inputText={email}
            setInputText={setEmail}
            className={email.length > 0 ? styles.focused : ''}
          />
          <span>*Valid email address required.</span>
        </div>
        <div className={styles.help}>
          <label htmlFor="equiry">How can we help you?</label>
          <textarea
            placeholder="I was wondering about availability and rates I need hep with the following:"
            id="enquiry"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">SUBMIT</button>
        <div>
          Make sure to avoid including any sensitive informaiton you don't want
          to share with the business.
        </div>
      </form>
    </div>
  );
};

export default Quote;
