// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      console.log(`Assertion passed: ${actual[i]} === ${expected[i]}`);
    } else {
      console.assert(actual[i] === expected[i], (`${actual[i]} !== ${expected[i]}`));
    }
  }
};

// const assertEqual = function(result, boolean) {
//   if (result === boolean) {
//     console.log("PASS");
//   } else {
//     console.log("FAIL");
//   }
// };

// doesn't work because the eqArrays don't come up with boolean
// refer to assertArraysEqual

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


module.exports = assertEqual;