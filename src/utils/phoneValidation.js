/**
 * Validates the value is 10 digit
 * @param {String} value 
 * @returns boolean 
 */

function phoneValidation(value) {
  return value.match(/\d/g).length===10;
}

export default phoneValidation;