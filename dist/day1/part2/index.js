"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = require("../puzzleData");
const data = puzzleData_1.puzzleData.split("\n");
const numbers = [];
const stringToNumber = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
data.forEach((line) => {
    const matches = [
        ...line.matchAll(/\d/g),
        ...line.matchAll(/one/g),
        ...line.matchAll(/two/g),
        ...line.matchAll(/three/g),
        ...line.matchAll(/four/g),
        ...line.matchAll(/five/g),
        ...line.matchAll(/six/g),
        ...line.matchAll(/seven/g),
        ...line.matchAll(/eight/g),
        ...line.matchAll(/nine/g)
    ].sort((a, b) => a.index - b.index).map((m) => {
        return m[0].toString().length > 1 ? stringToNumber[m[0]] : parseInt(m[0]);
    });
    const numberCombined = parseInt(`${matches[0]}${matches[matches.length - 1]}`);
    numbers.push(numberCombined);
});
const sum = numbers.reduce(((acc, num) => acc += num), 0);
console.log('sum', sum);
//# sourceMappingURL=index.js.map