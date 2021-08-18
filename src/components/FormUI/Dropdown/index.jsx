import React from 'react';
import { string, array, func, oneOf } from 'prop-types';
import classnames from 'classnames';

import styles from './dropdown.module.scss';

const propTypes = {
  name: string,
  options: array.isRequired,
  onChange: func,
  boxStatus: oneOf(['none','success','danger']),
  testId: string,
}

const defaultProps = {
  name: 'button',
  onChange: () => { },
  boxStatus: 'none',
  testId: 'dropdown',
}

const Dropdown = ({
  name,
  options,
  onChange,
  boxStatus,
  testId 
}) => {
  return (
      <select
        className={classnames(styles.dropdown, { [styles[`dropdown__boxStatus_${boxStatus}`]]: boxStatus })}
        name={name}
        onChange={onChange}
        data-testid={testId}
      >
        {options.map(item => {
          return (
            <option key={item}>{item}</option>
          )
        })}
      </select>
  )
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;