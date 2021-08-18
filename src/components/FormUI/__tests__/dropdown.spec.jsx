import React from 'react';
import { render } from '@testing-library/react';

import Dropdown from '../Dropdown';

const options = ['one','two','three'];

it('should match snapshot', () => {
  const { asFragment } = render(<Dropdown options={options} />)
  expect(asFragment()).toMatchSnapshot();
})

it('should return undefined when deafult onChange runs', () => {
  const dropdown = Dropdown.defaultProps.onChange();
  expect(dropdown).toBe(undefined);
})

it('should render boxStatus with danger when props passed in', () => {
  const { getByTestId } = render(<Dropdown options={options} boxStatus="danger" />);
  const dropdown = getByTestId('dropdown');
  expect(dropdown.className).toMatch('dropdown__boxStatus_danger');
});
