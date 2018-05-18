const range = function(start, end) {
  if (start >= end) {
    return [start];
  }

  return [start].concat(range(start + 1, end));
};

const sumRec = function(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
};

const exp = function(base, n) {
  if (n === 0) {
    return 1;
  }

  return base * exp(base, n - 1);
};

const exp2 = function(base, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return base;
  }
  if (n % 2 === 0) {
    let result = exp(base, n / 2);
    return(result * result);
  } else {
    let result = exp(base, (n -1)/2);
    return(base * result * result);
  }
};

const fib = function(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  let n2 = fib(n - 2);
  let n1 = fib(n - 1);

  return n1.concat(n2[n2.length - 1] + n1[n1.length - 1]);
};


const deepDup = function(arr) {
  // let result = [];
  // arr.forEach(el => {
  //   let dataType = Object.prototype.toString.call(el);
  //   if (dataType === "[object Array]") {
  //     result.push(deepDup(el));
  //   } else {
  //     result.push(el);
  //   }
  // });
  // return result;

  return arr.map(el => Object.prototype.toString.call(el) === "[object Array]" ? deepDup(el) : el);
};

//
// def deepDup(arr)
//   arr.map { |el| el.is_a?(Array) ? deepDup(el) : el }
// end



// const bsearch = function(arr, target) {
//   if (arr.length === 1) {
//     return -1;
//   }
//   let middle = Math.floor(arr.length / 2);
//
//   if (arr[middle] === target) {
//     return middle;
//   } else if (arr[middle] < target) {
//     return middle + 1 + bsearch(arr.slice(middle + 1), target);
//   } else if {
//     return bsearch(arr.slice(0, middle), target);
//   }
// };

// bsearch
function bsearch(numbers, target) {
  if (numbers.length === 0) {
    return -1;
  }

  const probeIdx = Math.floor(numbers.length / 2);
  const probe = numbers[probeIdx];

  if (target === probe) {
    return probeIdx;
  } else if (target < probe) {
    const left = numbers.slice(0, probeIdx);
    return bsearch(left, target);
  } else {
    const right = numbers.slice(probeIdx + 1);
    const subProblem = bsearch(right, target);

    return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
  }
}








//
