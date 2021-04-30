const takeUntil = function(array, callback) {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) !== true) {
      answer.push(array[i]);
    } else {
      break;
    }
  }
  return answer;
};



// This also works:

// const takeUntil = function(array, callback) {
//   let answer = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i]) === true) {   
//       break;
//     }
//     answer.push(array[i]);
//   }
//   return answer;
// };




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(result, boolean) {
  if (result === boolean) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
};

