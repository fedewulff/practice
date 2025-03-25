// const { default: test } = require("node:test");

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

test("capitalize", () => {
  expect(capitalize(`pepe popo`)).toMatch(`Pepe popo`);
});

function reverse(string) {
  const stringSplit = string.split(``);
  const stringReverse = stringSplit.reverse();
  const stringJoin = stringReverse.join(``);
  return stringJoin;
}

test(`reverse`, () => {
  expect(reverse(`hello`)).toBe(`olleh`);
});

function add(a, b) {
  return a + b;
}

test(`add`, () => {
  expect(add(2, 3)).toBe(5);
});

function substract(a, b) {
  return a - b;
}

test(`substract`, () => {
  expect(substract(2, 3)).toBe(-1);
});

function divide(a, b) {
  return a / b;
}

test(`divide`, () => {
  expect(divide(10, 2)).toBe(5);
});

function multiply(a, b) {
  return a * b;
}

test(`multiply`, () => {
  expect(multiply(10, 2)).toBe(20);
});

function caesarCipher(message, shift) {
  let result = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    // console.log(char);

    if (char.match(/[a-z]/i)) {
      const code = message.charCodeAt(i);
      // console.log(code);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        // console.log(char);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        // console.log(char);
      }
    }

    result += char;
  }

  return result;
}

test(`Caesar Cipher`, () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

function analyzeArray(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average = average + array[i];
  }
  average = average / array.length;

  let sortedArray = array.sort(function (a, b) {
    return a - b;
  });
  let last = sortedArray[array.length - 1];
  let first = sortedArray[0];

  return { [`average`]: average, [`min`]: first, [`max`]: last, [`length`]: array.length };
}

test(`analyzeArray`, () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});
