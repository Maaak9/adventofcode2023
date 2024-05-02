"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = require("../puzzleData");
// const test = `467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..`;
// let grid = test.split('\n').map((row) => row.split(''));
let grid = puzzleData_1.puzzleData.split('\n').map((row) => row.split(''));
const blueprint = grid.map((row) => row.slice());
const directions = [
    { dx: 0, dy: -1 }, // north
    { dx: -1, dy: -1 }, // north west
    { dx: 1, dy: -1 }, // north east
    { dx: 1, dy: 0 }, // east
    { dx: -1, dy: 0 }, // west
    { dx: 1, dy: 1 }, // south east
    { dx: -1, dy: 1 }, // south west
];
const removeNumber = ({ x, y }) => {
    console.log('here?', x, y);
    grid[y][x] = '.';
    let right = x + 1;
    console.log('/\d/g.test(grid?.[y]?.[right])', /\d/g.test(grid?.[y]?.[right]));
    while (/\d/g.test(grid?.[y]?.[right])) {
        console.log('right', right);
        grid[y][right] = '.';
        right += 1;
    }
    ;
    let left = x - 1;
    console.log('/\d/g.test(grid?.[y]?.[left])', /\d/g.test(grid?.[y]?.[left]));
    while (/\d/g.test(grid?.[y]?.[left])) {
        console.log('left', left);
        grid[y][left] = '.';
        left += -1;
    }
    ;
};
blueprint.forEach((row, y) => {
    row.forEach((col, x) => {
        // check for char thats not a number or "."
        if (/[^\d\.]/g.test(col)) {
            // check for numbers around special char
            directions.forEach((direction) => {
                if (/\d/g.test(grid?.[y + direction.dy]?.[x + direction.dx])) {
                    removeNumber({
                        x: x + direction.dx,
                        y: y + direction.dy,
                    });
                }
            });
        }
    });
});
const gridToString = grid.map((row) => row.join('')).join('\n');
const matches = [...gridToString.matchAll(/\d+/g)].map((m) => parseInt(m[0]));
const sum = matches.reduce(((acc, num) => acc += num), 0);
// Realised i didn't read the instructions correctly but i can sum it all and subtract the numbers that don't have a special char next to it.
const allMatches = [...puzzleData_1.puzzleData.matchAll(/\d+/g)].map((m) => parseInt(m[0]));
const sumOfAllMatches = allMatches.reduce(((acc, num) => acc += num), 0);
console.log('sumOfAllMatches', sumOfAllMatches - sum);
//# sourceMappingURL=index.js.map