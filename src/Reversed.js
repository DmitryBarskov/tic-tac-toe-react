class Reversed {
  constructor(array) {
    this.array = array;
  }

  map(func) {
    let length = this.array.length;
    let result = new Array(length);
    for (let i = length - 1; i >= 0; i--) {
      result[length - i - 1] = func(this.array[i], i, this.array);
    }
    return result;
  }
}

export default Reversed;
