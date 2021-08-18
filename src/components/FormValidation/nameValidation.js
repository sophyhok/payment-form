const nameValidation = name => {
  let regName = new RegExp('^[a-zA-Z-\']{2,50}');

  if (regName.test(name)) {
    return true;
  }
  
  return false;
}

export default nameValidation;