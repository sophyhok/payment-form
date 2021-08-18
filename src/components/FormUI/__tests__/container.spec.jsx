import React from 'react';
import { render } from '@testing-library/react';

import Container from '../Container';

let container;

it('should match snapshot', () => {
  const { asFragment } = render(<Container />);
  expect(asFragment()).toMatchSnapshot();
});

it('should render fontColor danger when props is passed', () => {
  const { getByTestId } = render(<Container fontColor="danger" />);
  container = getByTestId('container');
  expect(container.className).toMatch('container__fontColor_danger');
});

it('should render gap sm when no props is passed', () => {
  const { getByTestId } = render(<Container />);
  container = getByTestId('container');
  expect(container.className).toMatch('container__gap_sm');
});
