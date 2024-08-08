const orderValidation = (value) => {
  const error = {};
  if (!value.email) {
    error.email = "Please provide your email";
  }
  if (!value.rc) {
    error.rc = "Please provide your RC";
  }
  if (!value.purpose) {
    error.purpose = "Please provide your purpose";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = orderValidation;
