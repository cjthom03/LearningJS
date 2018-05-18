Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return undefined;
};
const doubles = function(num) {
  return num * 2;
};

const printTest = function(num) {
  return console.log(`${num} is the num`);
};

Array.prototype.myMap = function(callback) {
  const result = [];
  this.myEach(el => result.push(callback(el)));
  return result;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let arr;
  let acc;
  if (initialValue) {
    acc = initialValue;
    arr = this;
  } else {
    acc = this[0];
    arr = this.slice(1);
  }
  arr.myEach(el => acc = callback(acc, el));
  return acc;
};





//
