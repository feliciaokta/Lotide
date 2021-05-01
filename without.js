// FUNCTION IMPLEMENTATION

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(result, boolean) {
  if (result === boolean) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
};

// const without = function (source, remove) {
//   let index = source.indexOf(remove);
//     while (index >= 0) {
//       source.splice(index, 1);
//       index = source.indexOf(remove);
//     }
// }

const without = function (source, remove) {
  let ansArray = [];
  for (let i = 0; i < source.length; i++) {
    if (remove[i] === source[i]) {
      index = source.indexOf(remove[i]);
      collected = source.splice(index, 1);
      ansArray.push(source);
    }
  }
  return ansArray;
};
// but this modifies the source array, which is not allowed

// TEST CODE
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));