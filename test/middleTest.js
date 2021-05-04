const assert = require('chai').assert;
const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// TEST
// middle([1]) // => []
// middle([1, 2]) // => []
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [3, 4]), true) // return false

describe("middle", () => {
  
  it("returns the middle elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});