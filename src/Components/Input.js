/* eslint-disable react/prop-types */
import React from 'react';
const Input = ({title}) => {
  return (
    <div className="input-block">
      <input type="text" name="input-text" id="input-text" required spellCheck="false"/>
      <span className="placeholder">
        {title}
      </span>
    </div>
  );
};

export default Input;
