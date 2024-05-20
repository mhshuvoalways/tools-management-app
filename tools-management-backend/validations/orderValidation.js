const orderValidation = (value) => {
  const error = {};
  if (!value.name) {
    error.name = "Please provide your name";
  }
  if (!value.email) {
    error.email = "Please provide your email";
  }
  if (!value.phone) {
    error.phone = "Please provide your phone number";
  }
  if (!value.city) {
    error.city = "Please provide your city name";
  }
  if (!value.country) {
    error.country = "Please provide your country name";
  }
  if (!value.streetAddress) {
    error.streetAddress = "Please provide your street address name";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = orderValidation;
