import { puzzleData } from "../puzzleData";

// prepare game data
const gameData = puzzleData.split('\n').map((line) => {
  const [game, gameRounds] = line.split(':');
  const rounds = gameRounds.trim().split(';').map((r) => {
    let round = {};

    r.split(',').forEach((cubeData) => {
      const [nr, cubeColor] = cubeData.trim().split(' ');
      round[cubeColor] = parseInt(nr);
    })

    return round
  });

  // split 'game 14' and get nr
  const [ _, nr ] = game.split(' ');

  return {
    gameNr: parseInt(nr),
    rounds,
  }
})

const requirements = {
  red: 12,
  green: 13,
  blue: 14,
};

const possibleGames = [];

gameData.forEach((game) => {
  let isGamePossible = true;
  game.rounds.forEach((round) => {
    Object.keys(round).forEach((color) => {
      if (round[color] > requirements[color]) {
        isGamePossible = false;
      }
    })
  })

  if (isGamePossible) {
    possibleGames.push(game.gameNr)
  }
})

const sumOfPossibleGames = possibleGames.reduce((acc, gameNr) => acc += gameNr, 0);
console.log('sumOfPossibleGames', sumOfPossibleGames);