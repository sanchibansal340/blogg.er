const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};


// Convert empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : "";
  data.snippet = !isEmpty(data.snippet) ? data.snippet : "";
  data.body = !isEmpty(data.body) ? data.body : "";


// Title checks
  if (Validator.isEmpty(data.title)) {
    errors.title = "This field is required";
  }
  if (!Validator.isLength(data.title, { min: 6 })) {
    errors.title = "Title must be at least 6 characters";
  }


// Snippet checks
  if (Validator.isEmpty(data.snippet)) {
    errors.snippet = "This field is required";
  }


// Body checks
  if (Validator.isEmpty(data.body)) {
    errors.body = "This field is required";
  }
  
return {
    errors,
    isValid: isEmpty(errors)
  };
};