"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzleData_1 = require("../puzzleData");
// const puzzleData = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
// Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
// Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
// Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
// Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
const cards = puzzleData_1.puzzleData.split('\n').map((line) => {
    const [card, data] = line.trim().split(':');
    const [numbers, winningNumbers] = data.trim().split('|');
    return {
        numbers: numbers.trim().split(' ').map((nr) => parseInt(nr.trim())),
        winningNumbers: winningNumbers.trim().split(' ').map((nr) => parseInt(nr.trim())).filter((nr) => !isNaN(nr)),
    };
});
const pointsByCard = cards.map(({ numbers, winningNumbers }) => {
    const nrOfWinningNrs = numbers.filter((nr) => winningNumbers.includes(nr)).length;
    return nrOfWinningNrs === 0 ? 0 : Math.pow(2, nrOfWinningNrs - 1);
});
const sum = pointsByCard.reduce(((acc, num) => acc += num), 0);
console.log('sum', sum);
//# sourceMappingURL=index.js.map