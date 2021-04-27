// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, (actual + " !== " + expected));
  }
};
const head = function (arrayNum) {
  return arrayNum[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

