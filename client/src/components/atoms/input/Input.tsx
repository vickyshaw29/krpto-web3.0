import React from 'react';
import inputStyles from './InputStyles';
import { InputProps } from '../../../interfaces';

const Input = ({
  name,
  label,
  value,
  onChange,
  disabled,
  inlineStyle,
  ...rest
}: InputProps) => {
  const styles = inputStyles();
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        {...rest}
        className={styles.input}
        // style={inlineStyle}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
