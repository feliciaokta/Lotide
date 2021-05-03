// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] === expected[i]) {
//       console.log(`Assertion passed: ${actual[i]} === ${expected[i]}`);
//     } else {
//       console.assert(actual[i] === expected[i], (`${actual[i]} !== ${expected[i]}`));
//     }
//   }
// };

const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let answer = [];
  {
    answer = arr.slice(1);
  }
  return answer;
};


// // TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

module.exports = assertEqual;