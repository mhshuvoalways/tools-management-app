const productValidation = (value) => {
  const error = {};
  if (!value.categoryId) {
    error.category = "Please provide a tool category";
  }
  if (!value.image || value.image === "null") {
    error.image = "Please provide a tool an image";
  }
  if (!value.name) {
    error.name = "Please provide tool name";
  }
  if (!value.description) {
    error.description = "Please provide tool description";
  }
  if (!value.price) {
    error.price = "Please provide tool price";
  }
  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = productValidation;
