function hash(key, arraylength) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }

  return hashCode % arraylength;
}

class HashMap {
  constructor() {
    this.array = new Array(16);
    this.keys = 0;
  }
  // array = [];
  // keys = 0;

  resize() {
    let newArray = new Array(this.array.length * 2);
    console.log(this.array);
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i]) {
        for (let j = 0; j < this.array[i].length; j++) {
          let index = hash(this.array[i][j][0], newArray.length);
          if (index < 0 || index >= newArray.length) {
            throw new Error("Trying to access index out of bound");
          }
          if (newArray[index]) {
            // if (newArray[index].find((x) => x[0] === this.array[i][j][0])) {
            //   newArray[index].find((x) => x[0] === this.array[i][j][0])[1] =
            //     value;
            // } else {
            newArray[index].push([this.array[i][j][0], this.array[i][j][1]]);
            // }
          } else {
            newArray[index] = [[this.array[i][j][0], this.array[i][j][1]]];
          }
        }
      }
    }
    this.array = newArray;
    console.log(this.array);
  }

  set(key, value) {
    let index = hash(key, this.array.length);
    if (index < 0 || index >= this.array.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.array[index]) {
      if (this.array[index].find((x) => x[0] === key)) {
        this.array[index].find((x) => x[0] === key)[1] = value;
      } else {
        this.array[index].push([key, value]);
        this.keys++;
      }
    } else {
      this.array[index] = [[key, value]];
      this.keys++;
    }
    let loadFactor = this.keys / this.array.length;

    if (loadFactor > 0.75) {
      this.resize();
    }
  }

  get(key) {
    let index = hash(key);
    if (!this.array[index]) {
      return null;
    }
    return this.array[index].find((x) => x[0] === key)[1];
  }

  has(key) {
    let index = hash(key);
    if (this.array[index]) {
      if (this.array[index].find((x) => x[0] === key)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  remove(key) {
    let index = hash(key, this.array.length);
    if (this.array[index]) {
      for (let i = this.array[index].length - 1; i >= 0; i--) {
        if (this.array[index][i][0] === key) {
          this.array[index].splice([i], 1);
          this.keys--;
          return true;
        }
        if (this.array[index][0][0] !== key) {
          return false;
        }
      }
    } else {
      return false;
    }
  }

  length() {
    return this.keys;
  }

  clear() {
    this.array = new Array(16);
    this.keys = 0;
  }

  keysToArray() {
    let keysArray = [];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i]) {
        for (let j = 0; j < this.array[i].length; j++) {
          keysArray.push(this.array[i][j][0]);
        }
      }
    }
    return keysArray;
  }

  valuesToArray() {
    let valuesArray = [];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i]) {
        for (let j = 0; j < this.array[i].length; j++) {
          valuesArray.push(this.array[i][j][1]);
        }
      }
    }
    return valuesArray;
  }

  entries() {
    let entriesArray = [];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i]) {
        for (let j = 0; j < this.array[i].length; j++) {
          entriesArray.push(this.array[i][j]);
        }
      }
    }
    return entriesArray;
  }
}

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("elephant", `fedecapo`);

test.set("moon", "silver");

// console.log(test.array);
// console.log(test.entries());
// console.log(test.keys);

test.clear();
console.log(test);
