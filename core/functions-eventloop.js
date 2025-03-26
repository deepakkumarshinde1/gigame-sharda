if (2 === 2) {
} else {
}

if (2 === 3) {
} else if (3 === 4) {
} else {
}

function factorial(n = 1, result = 1) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return result;
  } else {
    result *= n;
    return factorial(n - 1, result);
  }
}
let r = factorial(5);
console.log(r);
console.clear();

// web api => setTimeout set Interval , promise (async await), fetch, DOM, xhr

setTimeout(function () {
  console.log("time up");
}, 3000); // 1s === 1000ms

let count = 10;
let intervalId = setInterval(function () {
  console.log(count--);

  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000); // 1s === 1000ms

console.log("hello text");
