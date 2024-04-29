"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = require("../../puzzleData");
const data = puzzleData_1.puzzleData.split("\n");
const numbers = [];
data.forEach((line) => {
    const matches = line.match(/\d/g);
    const numberCombined = parseInt(`${matches[0]}${matches[matches.length - 1]}`);
    numbers.push(numberCombined);
});
const sum = numbers.reduce(((acc, num) => acc += num), 0);
console.log('sum', sum);
//# sourceMappingURL=index.js.map