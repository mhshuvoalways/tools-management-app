const categoryValidation = (value) => {
  const error = {};
  if (!value.name) {
    error.name = "Please provide category name";
  }
  if (!value.image || value.image === "null") {
    error.image = "Please provide category image";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = categoryValidation;
