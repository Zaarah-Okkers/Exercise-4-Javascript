// TODO: Create a function that validates user input
const validateUserInput = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
};
// TODO: Create a function that demonstrates multiple error types
const demonstrateErrors = () => {
  try {
    console.log(nonExistentVariable);
  } catch (error) {
    console.error("Caught a ReferenceError:", error.message);
  }
};
// TODO: Create a collection of helper functions for string manipulation
const helperFunctions = {
  capitalize: (str) => {
    if (typeof str !== "string") {
      throw new TypeError("Input must be a string");
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  reverse: (str) => {
    if (typeof str !== "string") {
      throw new TypeError("Input must be a string");
    }
    return str.split("").reverse().join("");
  },

  // TODO: Create helper functions for array operations
  arrayHelperFunctions: {
    sum: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
      }
      return arr.reduce((acc, val) => acc + val, 0);
    },
    average: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
      }
      return arr.reduce((acc, val) => acc + val, 0) / arr.length;
    },
  },
};
