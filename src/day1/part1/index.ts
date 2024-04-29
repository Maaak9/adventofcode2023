import { puzzleData } from "../../puzzleData";

const data = puzzleData.split("\n");

const numbers: number[] = [];

data.forEach((line) => {
  const matches = line.match(/\d/g);
  const numberCombined = parseInt(`${matches[0]}${matches[matches.length - 1]}`);
  numbers.push(numberCombined);
});


const sum = numbers.reduce(((acc, num) => acc += num), 0);

console.log('sum', sum);