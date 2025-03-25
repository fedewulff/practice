// prettier-ignore
let graph = [
  [
    [[2, 1],[1, 2]],
    [[3, 1],[0, 2],[2, 2],],
    [[0, 1],[4, 1],[1, 2],[3, 2],],
    [[1, 1],[5, 1],[2, 2],[4, 2],],
    [[2, 1],[6, 1],[3, 2],[5, 2],],
    [[3, 1],[7, 1],[4, 2],[6, 2],],
    [[4, 1],[5, 2],[7, 2],],
    [[5, 1],[6, 2]],
  ],
  [
    [[2, 0],[2, 2],[1, 3],],
    [[3, 0],[3, 2],[2, 3],[0, 3],],
    [[0, 0],[4, 0],[0, 2],[4, 2],[1, 3],[3, 3],],
    [[1, 0],[5, 0],[1, 2],[5, 2],[2, 3],[4, 3],],
    [[2, 0],[6, 0],[2, 2],[6, 2],[3, 3],[5, 3],],
    [[3, 0],[7, 0],[3, 2],[7, 2],[4, 3],[6, 3],],
    [[4, 0],[4, 2],[5, 3],[7, 3],],
    [[5, 0],[5, 2],[6, 3],],
  ],
  [ [[1,0],[2,1],[2,3],[1,4]],
    [[0,0],[2,0],[3,1],[3,3],[2,4],[0,4]],
    [[0,1],[1,0],[3,0],[4,1],[4,3],[3,4],[1,4],[0,3]],
    [[1,1],[2,0],[4,0],[5,1],[5,3],[4,4],[2,4],[1,3]],
    [[2,1],[3,0],[5,0],[6,1],[6,3],[5,4],[3,4],[2,3]],
    [[3,1],[4,0],[6,0],[7,1],[7,3],[6,4],[4,4],[3,3]],
    [[4,1],[5,0],[7,0],[7,4],[5,4],[4,3]],
    [[5,1],[6,0],[6,4],[5,3]]
  ],
  [
    [[1,1],[2,2],[2,4],[1,5]],
    [[0,1],[2,1],[3,2],[3,4],[2,5],[0,5]],
    [[0,2],[1,1],[3,1],[4,2],[4,4],[3,5],[1,5],[0,4]],
    [[1,2],[2,1],[4,1],[5,2],[5,4],[4,5],[2,5],[1,4]],
    [[2,2],[3,1],[5,1],[6,2],[6,4],[5,5],[3,5],[2,4]],
    [[3,2],[4,1],[6,1],[7,2],[7,4],[6,5],[4,5],[3,4]],
    [[4,2],[5,1],[7,1],[7,5],[5,5],[4,4]],
    [[5,2],[6,1],[6,5],[5,4]]
  ],
  [
    [[1,2],[2,3],[2,5],[1,6]],
    [[0,2],[2,2],[3,3],[3,5],[2,6],[0,6]],
    [[0,3],[1,2],[3,2],[4,3],[4,5],[3,6],[1,6],[0,5]],
    [[1,3],[2,2],[4,2],[5,3],[5,5],[4,6],[2,6],[1,5]],
    [[2,3],[3,2],[5,2],[6,3],[6,5],[5,6],[3,6],[2,5]],
    [[3,3],[4,2],[6,2],[7,3],[7,5],[6,6],[4,6],[3,5]],
    [[4,3],[5,2],[7,2],[7,6],[5,6],[4,5]],
    [[5,3],[6,2],[6,6],[5,5]]
  ],
  [
    [[1,3],[2,4],[2,6],[1,7]],
    [[0,3],[2,3],[3,4],[3,6],[2,7],[0,7]],
    [[0,4],[1,3],[3,3],[4,4],[4,6],[3,7],[1,7],[0,6]],
    [[1,4],[2,3],[4,3],[5,4],[5,6],[4,7],[2,7],[1,6]],
    [[2,4],[3,3],[5,3],[6,4],[6,6],[5,7],[3,7],[2,6]],
    [[3,4],[4,3],[6,3],[7,4],[7,6],[6,7],[4,7],[3,6]],
    [[4,4],[5,3],[7,3],[7,7],[5,7],[4,6]],
    [[5,4],[6,3],[6,7],[5,6]]
  ],
  [
    [[1,4],[2,5],[2,7]],
    [[0,4],[2,4],[3,5],[3,7]],
    [[0,5],[1,4],[3,4],[4,5],[4,7],[0,7]],
    [[1,5],[2,4],[4,4],[5,5],[5,7],[1,7]],
    [[2,5],[3,4],[5,4],[6,5],[6,7],[2,7]],
    [[3,5],[4,4],[6,4],[7,5],[7,7],[3,7]],
    [[4,5],[5,4],[7,4],[4,7]],
    [[5,5],[6,4],[5,7]]
  ],
  [
    [[1,5],[2,6]],
    [[0,5],[2,5],[3,6]],
    [[0,6],[1,5],[3,5],[4,6]],
    [[1,6],[2,5],[4,5],[5,6]],
    [[2,6],[3,5],[5,5],[6,6]],
    [[3,6],[4,5],[6,5],[7,6]],
    [[4,6],[5,5],[7,5]],
    [[5,6],[6,5]]
  ]
];

let count = 0;
function knightMoves(locationVertex, destinationVertex) {}

knightMoves([0, 0], [3, 3]);

// [3, 3][(4, 5)][(2, 4)][(4, 3)];

let start = [3, 3];
let end = [4, 3];

let visitedArrays = [];
let secondVisitedArray = [];
let thirdVisitedArray = [];
function previous(start, end) {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      if (JSON.stringify(graph[i][j]).includes(JSON.stringify(end))) {
        visitedArrays.push([i, j]);
      }
    }
  }
  console.log(visitedArrays);
  // console.log(`  `);

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      for (let z = 0; z < visitedArrays.length; z++) {
        if (JSON.stringify(graph[i][j]).includes(JSON.stringify(visitedArrays[z]))) {
          if (!JSON.stringify(secondVisitedArray).includes(JSON.stringify([i, j]))) {
            secondVisitedArray.push([i, j]);
          }
        }
      }
    }
  }
  // console.log(secondVisitedArray);

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      for (let z = 0; z < secondVisitedArray.length; z++) {
        if (JSON.stringify(graph[i][j]).includes(JSON.stringify(secondVisitedArray[z]))) {
          if (JSON.stringify([i, j]) == JSON.stringify(start)) {
            console.log(secondVisitedArray[z]);
            console.log(`FIN`);
            return;
          }
          if (!JSON.stringify(thirdVisitedArray).includes(JSON.stringify([i, j]))) {
            thirdVisitedArray.push([i, j]);
          }
        }
      }
    }
  }
  console.log(thirdVisitedArray);
}
previous(start, end);

// function again(start, end) {
//   let array = graph[start[0]][start[1]];
//   visitedArrays.push(start);
//   console.log(JSON.stringify(array));

//   if (JSON.stringify(array).includes(JSON.stringify(end))) {
//     return;
//   }
//   if (!JSON.stringify(array).includes(JSON.stringify(end))) {
//     for (let i = 0; i < array.length; i++) {
//       console.log(array[i]);
//       visitedArrays.push(array[i]);
//       let secondArray = graph[array[i][0]][array[i][1]];
//       console.log(JSON.stringify(secondArray));
//       console.log(JSON.stringify(secondArray).includes(JSON.stringify(end)));
//       console.log(`ACA TERMINA`);
//       console.log(`    `);

//       if (JSON.stringify(secondArray).includes(JSON.stringify(end))) {
//         console.log(`FIN`);

//         visitedArrays.push(end);
//         console.log(visitedArrays);
//         return;
//       }
//     }
//   }
// }
// again(start, end);

//prettier-ignore
let moves = [[2,1],[1,2],[-2,1],[-1,2],[2,-1],[1,-2],[-2,-1],[-1,-2]];

let seenArray = [];

let counts = 0;
function repeat(inicio, final) {
  count++;
  for (let i = 0; i < moves.length; i++) {
    let pepe = [inicio[0] + moves[i][0], inicio[1] + moves[i][1]];

    // if (pepe[0] == final[0] && pepe[1] == final[1]) {
    //   console.log(`LISTO`);
    //   break;
    // }

    if (pepe[0] >= 0 && pepe[1] >= 0 && pepe[0] <= 7 && pepe[1] <= 7) {
      if (count == 8) {
        break;
      }

      if (!seenArray.includes(JSON.stringify(pepe))) {
        seenArray.push(JSON.stringify(pepe));
        let newArray = [];
        newArray.push(pepe);
        console.log(pepe);
        console.log(newArray);
        console.log(seenArray);
        repeat(pepe, final);
      }
    }
  }
}
// repeat(start, end);

// const fruits = [
//   ["apple", "banana", "chry", "orange"],
//   ["apple", "banana", "cuyhry", "orange"],
//   ["apple", "banana", "orange", "cherry"],
// ];

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].indexOf("cherry") >= 0) {
//     console.log(fruits.indexOf(fruits[i]));
//     const index = fruits[i].indexOf("cherry");
//     console.log(index); // Output: 2
//   }
// }
