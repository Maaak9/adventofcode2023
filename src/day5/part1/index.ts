import { puzzleData } from "../puzzleData";

// const puzzleData = `seeds: 79 14 55 13

// seed-to-soil map:
// 50 98 2
// 52 50 48

// soil-to-fertilizer map:
// 0 15 37
// 37 52 2
// 39 0 15

// fertilizer-to-water map:
// 49 53 8
// 0 11 42
// 42 0 7
// 57 7 4

// water-to-light map:
// 88 18 7
// 18 25 70

// light-to-temperature map:
// 45 77 23
// 81 45 19
// 68 64 13

// temperature-to-humidity map:
// 0 69 1
// 1 0 69

// humidity-to-location map:
// 60 56 37
// 56 93 4`;


const seedsMatch = puzzleData.match(/seeds:.*?(?=\n{2})/s);
const seeds = seedsMatch[0].replace('seeds: ', '').split(' ').map((seed) => parseInt(seed));

const parseData = (regex: RegExp, replaceString: string) => {
  const match = puzzleData.match(regex);
  console.log('replaceString', replaceString);
  return match[0]
    .replace(replaceString, '')
    .split('\n')
    .map((row) => row.split(' ').map((nr) => parseInt(nr)));
}

const almenac = [
  parseData(/seed-to-soil map:.*?(?=\n{2})/s, 'seed-to-soil map:\n'),
  parseData(/soil-to-fertilizer map:.*?(?=\n{2})/s, 'soil-to-fertilizer map:\n'),
  parseData(/fertilizer-to-water map:.*?(?=\n{2})/s, 'fertilizer-to-water map:\n'),
  parseData(/water-to-light map:.*?(?=\n{2})/s, 'water-to-light map:\n'),
  parseData(/light-to-temperature map:.*?(?=\n{2})/s, 'light-to-temperature map:\n'),
  parseData(/temperature-to-humidity map:.*?(?=\n{2})/s, 'temperature-to-humidity map:\n'),
  parseData(/humidity-to-location map:.*/s, 'humidity-to-location map:\n'),
]

const seedLocations = [];

seeds.forEach((seed) => {
  let currentSource = seed;
  for (const almenacEntry of almenac) {
    for (const [destination, source, length] of almenacEntry) {
      // currentSource 99
      // 98 legnth 2
      if (currentSource >= source && currentSource < (source + length)) {
        const diff = currentSource - source;
        currentSource = destination + diff;
        break;
      }
    }
  }

  seedLocations.push(currentSource)
});

// console.log('seedLocations', seedLocations);
// Seed 79, soil 81, fertilizer 81, water 81, light 74, temperature 78, humidity 78, location 82
// Seed 14, soil 14, fertilizer 53, water 49, light 42, temperature 42, humidity 43, location 43.
// Seed 55, soil 57, fertilizer 57, water 53, light 46, temperature 82, humidity 82, location 86.
// Seed 13, soil 13, fertilizer 52, water 41, light 34, temperature 34, humidity 35, location 35.


console.log('seedLocations', seedLocations);

console.log('lowest location number: ', seedLocations.sort((a, b) => a - b)[0]);



