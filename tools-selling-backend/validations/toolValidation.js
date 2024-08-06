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
  } else if (value.name.length >= 200) {
    error.name = "Keep the name within 200 charecters";
  }
  if (!value.description) {
    error.description = "Please provide tool description";
  } else if (value.description.length >= 2000) {
    error.description = "Keep the description within 2000 charecters";
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
