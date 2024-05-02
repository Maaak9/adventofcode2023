"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = require("../puzzleData");
// Answer should be 84495585 
// I have some kind of bug with linebreaks at .*..384\n617*.
const test = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
const directions = [
    { dx: 0, dy: -1 }, // north
    { dx: -1, dy: -1 }, // north west
    { dx: 1, dy: -1 }, // north east
    { dx: 1, dy: 0 }, // east
    { dx: -1, dy: 0 }, // west
    { dx: 1, dy: 1 }, // south east
    { dx: -1, dy: 1 }, // south west
];
const rowLength = puzzleData_1.puzzleData.split('\n')[0].length;
console.log('rowLength', rowLength);
const numberMatches = [...puzzleData_1.puzzleData.matchAll(/\d+/g)].map((match, index) => ({
    value: parseInt(match[0]),
    index: match.index,
    y: Math.floor(match.index / rowLength),
    x: match.index % rowLength,
    length: match[0].length - 1,
}));
// console.log('numberMatches', numberMatches)
const stars = [...puzzleData_1.puzzleData.matchAll(/\*/g)].map((match) => match.index);
const gears = [];
const test5 = [];
stars.forEach((starIndex) => {
    const y = Math.floor(starIndex / rowLength);
    const x = starIndex % rowLength;
    let numbersAroundStar = [];
    directions.forEach(({ dx, dy }) => {
        const currentX = x + dx;
        const currentY = y + dy;
        numberMatches.forEach((numberMatch) => {
            if (y === 125 && x === 3 && numberMatch.y === 125) {
                console.log('numberMatch', numberMatch);
            }
            if (currentY === numberMatch.y &&
                (currentX >= numberMatch.x && currentX <= (numberMatch.x + numberMatch.length))) {
                // console.log('numberMatch', numberMatch)
                if (!numbersAroundStar.includes(numberMatch)) {
                    numbersAroundStar.push(numberMatch);
                }
            }
        });
    });
    if (y === 125 && x === 3) {
        // console.log('y', y, 'x', x)
        // console.log('numbersAroundStar', numbersAroundStar)
    }
    if (numbersAroundStar.length === 2) {
        const temp = [numbersAroundStar[0].value.toString(), numbersAroundStar[1].value.toString()].sort((a, b) => a - b);
        test5.push(temp);
        gears.push(numbersAroundStar[0].value * numbersAroundStar[1].value);
    }
});
// console.log('gears', gears)
const sum = gears.reduce(((acc, num) => acc += num), 0);
console.log('sum', sum);
// console.log('test5', JSON.stringify(test5.sort((a, b) => a[0] - b[0])))
//# sourceMappingURL=index.js.map