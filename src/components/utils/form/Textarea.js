import React, { Fragment } from 'react';

const Textarea = ({
  label,
  placeholder,
  name,
  textareaInput,
  setTextareaInput,
  length,
}) => {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <textarea
        placeholder={placeholder}
        id={name}
        value={textareaInput}
        onChange={(e) => {
          setTextareaInput(e.target.value);
        }}
        maxLength={length}
      ></textarea>
      <div>{textareaInput.length}/1000</div>
    </Fragment>
  );
};

export default Textarea;
