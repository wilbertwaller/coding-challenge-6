/*
  Write a javascript function that takes an array of numbers and a target number.
  The function should find two different numbers in the array that,
  when added together, gives the target number.
  For example: answer([1,2,3], 4) should return [1,3]
*/

const input = [1, 2, 3];
const sum = 4;

const findAddends = (input, sum) => {
  for (let i = 0; i < input.length - 1; i++) {
    let addend = input[i];
    if (input.includes((sum - addend), (i + 1))) {
      return [].concat(addend, (sum - addend));
    }
  }

  return [];
};

const addends = findAddends(input, sum);

console.log(addends);

if (!addends.length) {
  console.log(`Input array does not contain addends for target ${sum}.`);
}