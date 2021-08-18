const cvvValidation = (cardType, cvv ) => {
  let visaCvv = new RegExp('^[0-9]{3}');
  let amexCvv = new RegExp('^[0-9]{4}');

  if (cardType === 'visa') {
    return visaCvv.test(cvv);
  }
  else if (cardType === 'amex') {
    return amexCvv.test(cvv);
  }

  return false;
}

export default cvvValidation;