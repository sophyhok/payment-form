import React, { useState } from 'react';
import parse from 'html-react-parser';

import Button from './FormUI/Button';
import Input from './FormUI/Input';
import DropDown from './FormUI/Dropdown';
import Container from './FormUI/Container';
import paymentFormValidation from './FormValidation/paymentFormValidation';

import amexImg from '../assets/img/amex.png';
import visaImg from '../assets/img/visa.png';

const PaymentForm = () => {
  const monthsList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const yearsList = ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031'];
  const bStatus = { name: 'none', card: 'none', cvv: 'none', exp: 'none' };
  const initialValue = { name: '', card: '', cvv: '', expMonth: monthsList[0], expYear: yearsList[0] };

  const [validation, setValidation] = useState(true);
  const [errors, setErrors] = useState({});
  const [boxStatus, setBoxStatus] = useState(bStatus);
  const [formValue, setFormValue] = useState(initialValue);

  const handleSubmit = event => {
    event.preventDefault();

    // check validation, return as object
    const validateResults = paymentFormValidation(formValue);

    // if not empty, there is an error in validation
    if (validateResults.length > 0) {
      setValidation(false);
      setErrors(validateResults);

      // setBoxStatus for input props
      validateResults.forEach(e => {
        let [key] = Object.keys(e);
        if (key === 'name') {
          setBoxStatus(prev => ({ ...prev, name: 'danger' }))
        }
        else if (key === 'cardNumber') {
          setBoxStatus(prev => ({ ...prev, card: 'danger' }))
        }
        else if (key === 'cvv') {
          setBoxStatus(prev => ({ ...prev, cvv: 'danger' }))
        }
        else if (key === 'expiration') {
          setBoxStatus(prev => ({ ...prev, exp: 'danger' }))
        }
      });
    }
    // no errors in validation
    else {
      setValidation(true);
      alert("Success! You have submitted your card information");
    }
  }

  const formatErrors = () => {
    let message = '';
    errors.forEach(e => {
      let [key] = Object.keys(e);
      message += `<div>${e[key]}</div>`;
    })
    return parse(message); // convert string to html
  }

  const handleChange = (event, key) => {
    setBoxStatus(bStatus)
    event.preventDefault();
    let value = event.target.value;

    // simple card format
    if (key === 'card') {
      // add space for visa
      if (value[0] === '4') {
        value = value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ');
      }
      // add space for amex
      else if (value.slice(0, 2) === '34' || value.slice(0, 2) === '37') {
        if (value.length === 4) {
          value += " ";
        }
        else if (value.length === 11) {
          value += " ";
        }
      }
    }

    setFormValue(prev => ({ ...prev, [event.target.name]: value }))
  }

  return (
    <form name="payment-form">
      <Container gap="none" justify="center" align="center">
        <h3>Enter your Credit Card information</h3>
        {!validation && (
          <Container gap="none" fontColor="danger">{formatErrors()}</Container>
        )}
        <div><img alt="visa" src={visaImg} /><img alt="amex" src={amexImg} /></div>
        <br />
        <Container gap="md" justify="center">
        <Input
          name="name"
          value={formValue.name}
          placeholder="Enter Name on Card"
          onChange={handleChange}
          boxStatus={boxStatus.name}
          testId="input-name"
        />
        <Input
          name="card"
          type="tel"
          value={formValue.card}
          placeholder="Enter Card Number"
          onChange={event => handleChange(event, 'card')}
          boxStatus={boxStatus.card}
          testId="input-card"
        />
        <div>
          <div>Card Expiration</div>
          <DropDown
            name="expMonth"
            options={monthsList}
            onChange={handleChange}
            boxStatus={boxStatus.exp}
            testId="input-month"
          />
          <DropDown
            name="expYear"
            options={yearsList}
            onChange={handleChange}
            boxStatus={boxStatus.exp}
            testId="input-year"
          />
        </div>
        <Input
          name="cvv"
          value={formValue.cvv}
          placeholder="Enter CVV"
          onChange={handleChange}
          boxStatus={boxStatus.cvv}
          testId="input-cvv"
        />
        <Button label="Submit Payment" variant="primary" onClick={event => handleSubmit(event)} />
        </Container>
      </Container>
    </form>
  )
}

export default PaymentForm;
