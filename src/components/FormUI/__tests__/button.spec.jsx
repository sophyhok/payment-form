import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from '../Button';

const onClick = jest.fn();

it('should match snapshot', () => {
  const { asFragment } = render(<Button />)
  expect(asFragment()).toMatchSnapshot();
});

it('should call the onClick function when the button is clicked', () => {
  const { getByText } = render(<Button onClick={onClick} />);
  const button = getByText('button');
  fireEvent.click(button);

  expect(onClick).toHaveBeenCalled();
});

it('should render primaryInverse variant', () => {
  const { getByText } = render(
    <Button variant="primaryInverse"/>,
  );
  const button = getByText('button');
  expect(button).toHaveClass('btn__primaryInverse');
});