const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual === expected, (actual + " !== " + expected));
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

console.log(countLetters("dr house is in the house yo"));