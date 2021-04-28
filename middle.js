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

// median function? No, we don't need to sort
const middle = function (arr) {
  let answer = [];
  let answerIndex = 0;
  if (arr.length === 1 || arr.length === 2) {
    answer = null;
  } else if (arr.length % 2 === 1) {
    answerIndex = (arr.length + 1) / 2;
    answer.push(arr[answerIndex - 1]);
  } else if (arr.length % 2 === 0) {
    answerIndex = (arr.length) / 2;
    answer.push(arr[answerIndex - 1]) + answer.push(arr[answerIndex]);
  }
  return answer;
};

// TEST
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]