
const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);


describe("tail", () => {
  
  it("returns the elements without the first one", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});