import React from 'react';
import { string, oneOf, node } from 'prop-types';
import classnames from 'classnames';

import styles from './container.module.scss';

const propTypes = {
  children: node,
  align: oneOf(['start', 'end', 'center', 'stretch']),
  justify: oneOf(['start', 'end', 'center', 'stretch']),
  gap: oneOf(['none', 'xs', 'sm', 'md', 'lg']),
  fontColor: oneOf(['danger', 'dark', 'success', 'warning']),
  testId: string,
}

const defaultProps = {
  children: null,
  align: 'start',
  gap: 'sm',
  justify: 'start',
  fontColor: 'dark',
  testId: 'container'
}

const Container = ({align, children, justify, gap, fontColor, testId}) => {
  return (
    <div className={classnames(styles.container,
      styles[`container__align_${align}`],
      styles[`container__justify_${justify}`],
      styles[`container__gap_${gap}`],
      styles[`container__fontColor_${fontColor}`]
      )}
      data-testid={testId}
    >
      {children}
    </div>
  )
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;