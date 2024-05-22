const categoryValidation = (value) => {
  const error = {};
  if (!value.name) {
    error.name = "Please provide category name";
  } else if (value.name.length >= 50) {
    error.name = "Keep the name within 50 charecters";
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
