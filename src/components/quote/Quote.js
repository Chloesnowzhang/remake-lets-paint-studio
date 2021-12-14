import React, { useState } from 'react';

import styles from './Quote-styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from '../utils/form/Input';
import Textarea from '../utils/form/Textarea';

const Quote = ({ close, setClose }) => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [textareaInput, setTextareaInput] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    setUsername('');
    setPhone('');
    setEmail('');
    setTextareaInput('');
  };

  return (
    <div className={`${close ? styles.close : styles.container}`}>
      <div className={styles.title}>
        <span
          className="clickable"
          onClick={() => {
            setClose(true);
          }}
        >
          <FontAwesomeIcon icon="times" />
        </span>

        <span>Get quote</span>
      </div>
      <form onSubmit={onFormSubmit}>
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
            required={true}
          />
          <span>*Valid email address required.</span>
        </div>
        <div className={styles.help}>
          <Textarea
            label="How can we help you?"
            placeholder="I was wondering about availability and rates I need hep with the following:"
            textareaInput={textareaInput}
            setTextareaInput={setTextareaInput}
            name="enquiry"
            length="1000"
          />
        </div>
        <div className={styles.btn}>
          <button type="submit">SUBMIT</button>
        </div>

        <div className={styles.caption}>
          Make sure to avoid including any sensitive informaiton you don't want
          to share with the business.
        </div>
      </form>
    </div>
  );
};

export default Quote;
