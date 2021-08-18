import React, { useState, useEffect } from 'react';
import { string, func, oneOf } from 'prop-types';
import classnames from 'classnames';

import styles from './input.module.scss';

const propTypes = {
  name: string,
  type: string,
  value: string,
  label: string,
  placeholder: string,
  onChange: func,
  boxStatus: oneOf(['none', 'success', 'danger']),
  testId: string,
}

const defaultProps = {
  name: 'input',
  type: 'text',
  value: '',
  placeholder: '',
  errorInput: '',
  onChange: () => { },
  boxStatus: 'none',
  testId: 'input'
}

const Input = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  boxStatus,
  testId
}) => {
  const [inputValue, handleChange] = useState(value);

  const updateInput = event => {
    handleChange(event.target.value);
    onChange(event);
  };

  useEffect(() => {
    handleChange(value);
  }, [value]);

  return (
      <input
        className={classnames(styles.input, {[styles[`input__boxStatus_${boxStatus}`]]: boxStatus})}
        name={name}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={event => updateInput(event)}
        data-testid={testId}
        pattern="[A-Za-z]{3}"
      />
  )
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;