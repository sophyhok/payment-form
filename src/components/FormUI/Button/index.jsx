import React from 'react';
import { string, oneOf, func } from 'prop-types';
import classnames from 'classnames';

import styles from './button.module.scss';

const propTypes = {
  label: string,
  onClick: func,
  variant: oneOf([
    'primary',
    'primaryInverse',
  ]),
  testId: string,
}

const defaultProps = {
  label: 'button',
  onClick: null,
  variant: 'primary',
  testId: 'button',
}

const Button = ({ label, onClick, variant, testId }) => {
  return (
    <button
      className={classnames(styles.btn, styles[`btn__${variant}`])}
      onClick={onClick}
      data-testid={testId}
    >
      {label}
    </button>
  )
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;