import React, { Fragment, useState } from 'react';

const Input = ({ type, name, label, inputText, setInputText, className }) => {
  return (
    <Fragment>
      <input
        type={type}
        onChange={(e) => setInputText(e.target.value)}
        name={name}
        id={name}
        value={inputText}
      />
      <label htmlFor={name} className={className}>
        {label}
      </label>
    </Fragment>
  );
};

export default Input;
