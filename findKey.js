// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, (`${actual} !== ${expected}`));
  }
};




const findKey = function (obj, func) {
  // if func(value) is true, then output the key
  let answer = "";
  let keys = Object.keys(obj);
  for (const key of keys) {
    console.log(obj[key]);
    if(func(obj[key])) { // returns true or false
      answer = key;
      break;
    }
  }
  return answer;
};


// Expected:
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"



// if (func(obj[key]) === obj[key].stars) {
    //   answer = key;
    //   } else {
    //     answer = undefined;
    //   }
    // }