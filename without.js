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
  eqArrays(source, remove);
  let index = source.indexOf(remove);
  if (eqArrays === true) {
    while (index >= 0) {
      source.splice(index, 1);
      index = source.indexOf(remove);
    }
  } else if (eqArrays === false) {
    ansArray.push(source);
  }
  return ansArray;
}

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

