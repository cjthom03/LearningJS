
Array.prototype.bubbleSort = function() {
  let arr = this;
  let sorted = true;

  while (sorted){
    sorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        // [arr[i], arr[i+1]] = swap(arr[i], arr[i+1]);
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        sorted = true;
      }
    }
  }

  return arr;
};

const swap = function(val1, val2) {
  let temp = val1;
  val1 = val2;
  val2 = temp;
  return [val1, val2];
};


String.prototype.substrings = function() {
  let substrings = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      substrings.push(this.slice(i, j));
    }
  }
  return substrings;
};
