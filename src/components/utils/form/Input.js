import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  name,
  label,
  inputText,
  setInputText,
  className,
  required,
}) => {
  return (
    <Fragment>
      <input
        type={type}
        onChange={(e) => setInputText(e.target.value)}
        name={name}
        id={name}
        value={inputText}
        required={required}
      />
      <label htmlFor={name} className={className}>
        {label}
      </label>
    </Fragment>
  );
};

Input.defaultProps = {
  required: false,
};

export default Input;
