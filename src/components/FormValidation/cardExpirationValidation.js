const cardExpirationValidation = (month, year) => {
  const today = new Date();
  const dateInput = new Date();
  
  dateInput.setFullYear(year, month, 0);
  
  if (dateInput > today) {
    return true;
  }

  return false;
}

export default cardExpirationValidation;