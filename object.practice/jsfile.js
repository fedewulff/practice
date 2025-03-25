const animals = {
  cat: 2,
  dog: 3,
  hamster: 4,
  A: [`B`],
  B: [`A`],
};

function show(key) {
  if (!animals[key]) return `undefinded`;
  return animals[key];
}

console.log(show(`hamster`));

function add(key, value) {
  animals[key].push(value);
  return animals[key];
}

console.log(add(`A`, `C`));

console.log(animals);

const graph = {
  A: [1, 3],
  B: [0, 2, 4],
  C: [1, 4],
  D: [0],
  E: [1, 2],
};

console.log(graph.B);

const graphArray = [[1, 3], [0, 2, 4], [1, 4], [0], [1, 2]];
