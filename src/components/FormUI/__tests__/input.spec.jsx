import React from 'react';
import { render } from '@testing-library/react';

import Input from '../Input';

it('should match snapshot', () => {
  const { asFragment} = render(<Input />);
  expect(asFragment()).toMatchSnapshot();
})

it('should return undefined when default onChange runs', () => {
  const result = Input.defaultProps.onChange();
  expect(result).toBe(undefined);
});

it('should render boxStatus success when props passed in', () => {
  const { getByTestId } = render(<Input boxStatus="success" />);
  const input = getByTestId('input');
  expect(input.className).toMatch('input__boxStatus_success');
});