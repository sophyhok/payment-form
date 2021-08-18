const cardValidation = cardNumber => {
  let amex = new RegExp('^3[47][0-9]{13}$'); // start at 34 or 37 plus 13 more digits
  let visa = new RegExp('^4[0-9]{15}$');     // start at 4 plus 15 more digits

  let cardType = 'unknown';
  let valid = false;

  if (visa.test(cardNumber)) {
    cardType = 'visa';
    valid = true;
  }
  else if (amex.test(cardNumber)) {
    cardType = 'amex';
    valid = true;
  }

  return { cardType, valid };
}

export default cardValidation;