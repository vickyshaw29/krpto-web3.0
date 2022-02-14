import React from 'react';
import inputStyles from './InputStyles';

const Input = ({
  name,
  label,
  value,
  onChange,
  disabled,
  inlineStyle,
  ...otherProps
}: any) => {
  const styles = inputStyles();
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        {...otherProps}
        className={styles.input}
        // style={inlineStyle}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
