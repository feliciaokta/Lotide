// FUNCTION IMPLEMENTATION
// const eqArrays = function(actual, expected) {
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(result, boolean) {
  if (result === boolean) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
};


// // TEST CODE
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = eqArrays;