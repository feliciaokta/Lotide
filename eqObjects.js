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


// want to make function that checks whether 2 objects are exactly the same
// two objects are equal when:
// 1. they have the same number of keys
// 2. The value for each key in 1st object is the same as the value for that same key in 2nd object

// For the const eqObjects function:
  // use the findKeyByValue exercise:
  // find the values first in the 1st object,
  // see if the key of that value matches the key in the other object
  // loop the whole thing.
  // need to use eqArrays function...
  // Array.isArray([1, 2]) => true. This function is to determine whether the content is an array

// inspect each key-value pair in both objects
// compare the values

const eqObjects = function(object1, object2) {
  let answer = "";
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let obj1length = keys1.length;
  let obj2length = keys2.length;
  let isObj1ValueArray = keys1.isArray;
  let isObj2ValueArray = keys1.isArray;
  // loop "for value in every object"??
  if (obj1length === obj2length) {
    if (isObj1ValueArray === true && isObj2ValueArray === true) {
      answer = eqArrays(object1, object2);
      // this isArray doesn't work
    } else if (object1[keys1] === object2[keys2]) {
      answer = true;
    } else if (object1[keys1] !== object2[keys2]) {
      answer = false;
    }
  } else {
      answer = false;
    }
    return answer;
  };


// expected output:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false ... but my eqObjects returns true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

//http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html