/*
  Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
  make a function that organizes these into individual array that is ordered.
  For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591].
  Bonus: Make it so it organizes strings differently from number types.
  i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/


const input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let output = [];

const cleanTheRoom = (input) => {

  const group = getGroup(input);

  // concat
  if (group.strings.length) {
    return [group.numbers].concat([group.strings]);
  }
  return group.numbers;
};

const getGroup = (input) => {
  // separate types into arrays
  let numberArray = input.filter(number => typeof(number) === 'number');
  let stringArray = input.filter(number => typeof(number) === 'string');

  // sort arrays
  numberArray.sort((a, b) => a - b);
  stringArray.sort((a, b) => a - b);

  // group duplicates into array
  const numbers = groupDups(numberArray);
  const strings = groupDups(stringArray);

  return { numbers, strings };
};

const groupDups = (input) => {
  let groupArray = input.slice();
  let currIndex = 0;

  while (currIndex < groupArray.length) {
    let value = groupArray[currIndex];
    let index = groupArray.lastIndexOf(value);
    let count = index + 1 - currIndex;

    if (count > 1) {
      groupArray.splice(currIndex, count, Array(count).fill(value));
    }

    currIndex++;
  }
  
  return groupArray;
};

output = cleanTheRoom(input);

console.log(output);