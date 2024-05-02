import { puzzleData } from "../puzzleData";


// const puzzleData = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
// Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
// Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
// Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
// Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

const nrOfCards = puzzleData.split('\n').length;

const cards = puzzleData.split('\n').map((line) => {
  const [ _card, data ] = line.trim().split(':');
  const [ numbers , winningNumbers ] = data.trim().split('|');

  return {
    numbers: numbers.trim().split(' ').map((nr) => parseInt(nr.trim())),
    winningNumbers: winningNumbers.trim().split(' ').map((nr) => parseInt(nr.trim())).filter((nr) => !isNaN(nr)),
  }
});

const winningNumbersByCard = cards.map(({numbers, winningNumbers}) => {
  return numbers.filter((nr) => winningNumbers.includes(nr));
})

let cardsCounter = new Array(nrOfCards).fill(0);

const getWinningCards = (cardNr: number) => {
  cardsCounter[cardNr] = cardsCounter[cardNr] + 1;
  // console.log('winningNumbersByCard[cardNr]', winningNumbersByCard[cardNr]);
  const nrOfWinningNrs = winningNumbersByCard[cardNr].length;

  for (let i = 0; i < nrOfWinningNrs; i++) {
    const nextCard = cardNr + 1 + i;
    if (nextCard < 196) {
      getWinningCards(nextCard);
    }
  }
}

for (let i = 0; i < nrOfCards; i++) {
  getWinningCards(i);
}

// console.log('cardsCounter', cardsCounter);
const sum = cardsCounter.reduce(((acc, num) => acc += num), 0);
console.log('sum', sum)
