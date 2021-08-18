import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PaymentForm from '../PaymentForm';

it('should match snapshot', () => {
  const { asFragment } = render(<PaymentForm />)
  expect(asFragment()).toMatchSnapshot();
});

describe('Validate Input: ', () => {

  it('should show error message when input name is invalid', () => {
    const { getByTestId, getByText } = render(<PaymentForm />);
    const button = getByTestId('button')
    const nameInput = getByTestId('input-name');

    fireEvent.change(nameInput, { target: { value: '123' } });
    fireEvent.click(button);

    expect(getByText('Name is invalid')).toBeInTheDocument();
  });
  it('should show error message when input card is invalid', () => {
    const { getByTestId, getByText } = render(<PaymentForm />);
    const button = getByTestId('button')
    const cardInput = getByTestId('input-card');

    fireEvent.change(cardInput, { target: { value: '0000' } });
    fireEvent.click(button);

    expect(getByText('Card is invalid')).toBeInTheDocument();
  });

  it('should show error message when input cvv is invalid', () => {
    const { getByTestId, getByText } = render(<PaymentForm />);
    const button = getByTestId('button')
    const cvvInput = getByTestId('input-cvv');

    fireEvent.change(cvvInput, { target: { value: '00' } });
    fireEvent.click(button);

    expect(getByText('CVV is invalid')).toBeInTheDocument();
  });

  it('should show error message when input date is invalid', () => {
    const { getByTestId, getByText } = render(<PaymentForm />);
    const button = getByTestId('button')
    const monthInput = getByTestId('input-month');
    const yearInput = getByTestId('input-year');

    fireEvent.change(monthInput, { target: { value: '01' } });
    fireEvent.change(yearInput, { target: { value: '2021' } });
    fireEvent.click(button);

    expect(getByText('Expiration is invalid')).toBeInTheDocument();
  });
});

