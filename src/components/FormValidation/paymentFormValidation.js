import cardValidation from './cardValidation';
import nameValidation from './nameValidation';
import cvvValidation from './cvvValidation';
import cardExpirationValidation from './cardExpirationValidation'

const paymentFormValidation = formInfo => {
  const { name, card, expMonth, expYear, cvv } = formInfo;

  const result = [];

  // name 
  if (!nameValidation(name)) {
    result.push({name: 'Name is invalid'});
  }

  // card number and cvv
  let validatecard = cardValidation(card.split(" ").join(""));
  if (!validatecard.valid) {
    result.push({cardNumber: 'Card is invalid'});
  }
  if (!cvvValidation(validatecard.cardType, cvv)) {
    result.push({cvv: 'CVV is invalid'});
  }

  // expiration date
  if (!cardExpirationValidation(expMonth,expYear)) {
    result.push({expiration: 'Expiration is invalid'});
  }

  return result;
}

export default paymentFormValidation;