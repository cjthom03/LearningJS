
Array.prototype.uniq = function () {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (result.includes(this[i])) {
      continue;
    }
    result.push(this[i]);
  }

  return result;
};


Array.prototype.twoSum = function () {
  const result = [];

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function () {
  const result = [];

  for (let i = 0; i < this[0].length; i++) {
    const innerResult = [];
    for (let j = 0; j < this.length; j++) {
      debugger;
      innerResult.push(this[j][i]);
    }
    result.push(innerResult);
  }

  return result;
};
