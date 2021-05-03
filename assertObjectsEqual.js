const eqObjects = function(object1, object2) {
  let answer = "";
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let obj1length = keys1.length;
  let obj2length = keys2.length;
  if (obj1length === obj2length) {
    for (let key in object1) {
      let val1 = object1[key];
      let val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      for (let i = 0; i < val2.length; i++) {
        if (val1[i] === val2[i]) {
          answer = true;
        } else {
          answer = false;
        }
      }
      }
    }} else if (val1 === val2) {
      answer = true;
    } else if (val1 !== val2) {
      answer = false;
    } else {
      answer = false;
    }
    return answer;
  };


  const assertEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    for (let i = 0; i < actual.length; i++) {
      if (actual === expected) {
        console.log(`Assertion passed: ${inspect(actual[i])} === ${inspect(expected[i])}`);
      } else {
        console.assert(actual[i] === expected[i], (`${inspect(actual[i])} !== ${inspect(expected[i])}`));
      }
    }
  };


// expected output:
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("question 1 ", eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("question 2 ", eqObjects(cd, cd2)); // => false