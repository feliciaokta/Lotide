// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, (`${actual} !== ${expected}`));
  }
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(obj, value) {
  let answer = "";
  let keys = Object.keys(obj); // output is an array of all the keys
  for (const key of keys) {
    if (obj[key] === value) {
      answer = key;
      } else {
        answer = undefined;
      }
    }
  return answer;
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));


// to access an object key inside the parantheses of a for() loop,
// you need to write the function Object.keys(obj).
// for(let key of Object.keys(obj));