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

const fewestPossibleCubesInRounds = gameData.map((game) => {
  const fewestCubes = {};

  game.rounds.forEach((round) => {
    Object.keys(round).forEach((color) => {
      if (!fewestCubes[color]) {
        fewestCubes[color] = round[color];
      } else if (fewestCubes[color] < round[color]) {
        fewestCubes[color] = round[color];
      }
    });
  })

  return fewestCubes;
});


const sumByRounds = fewestPossibleCubesInRounds.map((round) => {
  let sum = 1;
  Object.keys(round).forEach((color) => {
    sum = sum * round[color];
  })
  return sum;
});

const sum = sumByRounds.reduce((acc, sum) => acc += sum, 0);
console.log('sum', sum);
