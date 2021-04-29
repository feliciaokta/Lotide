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

const countLetters = function(sentence) {
  // return a count of how many times each letter appears
  // do NOT count spaces
  let answer = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (answer[letter]) {
        answer[letter] += 1;
      } else {
        answer[letter] = 1;
      }
    }
  }
  return answer;
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i], i);
    if (sentence[i] !== ' ') {
      // if (results[sentence[i]]) {
      //   results[sentence[i]].push(i);
      // } else {
      //   results[sentence[i]] = [i]; // this square bracket means it's an array
      // }
      results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i]
    }
  }
  return results;
};

console.log(letterPositions("This is exercise"));


// Push an item into an array inside an object
// const obj = {
//   a: [1, 2, 3],
//   b: [4, 5, 6],
//   c: [7, 8, 9]
// }
// const add = function (key) {
//   obj[key].push(6);
//   obj[key].push(7);
// };
// add("b");
// console.log(obj);
// console.log(obj["a"][1]);