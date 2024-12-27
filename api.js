/// fetch
let url = "https://jsonplaceholder.typicode.com/posts/2/comments";
async function getData(url) {
  let response = await fetch(url, {
    method: "GET",
  });
  let data = await response.json();
  console.log(data);
}

getData(url);

// functional programming
// pure function
let number = 10;
function add(a, b) {
  console.log(a + b);
}

add(10, 20);

// 5  => 5+4+3+2+1
// recursive function
function sum(number = 0, result = 0) {
  if (number === 0) {
    return result;
  } else {
    result += number;
    number--;
    return sum(number, result);
  }
}

sum();

// functional programming concepts
// 1. pure function
function add(a, b) {
  return a + b;
}
// 2. higher order function
// definition: A higher-order function is a function that takes another
// function as an argument or returns a function as a result.

function sample(a, b, callback) {
  let result = a + b;
  callback();
}
sample(10, 20, function () {
  console.log("I am a callback function");
});
// 3. first class function
// definition: A programming language is said to have First-class functions when
// functions in that language are treated like any other variable.
function sample() {
  console.log("I am a first class function");
}
let firstClassFunction = sample;
firstClassFunction();

// 5. currying
// definition: Currying is the process of taking a function with multiple arguments
// and turning it into a sequence of functions each with only a single argument.
function add(a) {
  return function (b) {
    return a + b;
  };
}

let currying = (a) => (b) => (c) => a + b;
let result1 = currying(10)(20)(30);
console.log(result1);
let result = add(10)(20);
console.log(result);

// 6. composition
// definition: Composition is the process of combining two or more functions to
// produce a new function.
function add(a) {
  return a + 1;
}
function multiply(a) {
  return a * 2;
}

let composition = (a) => add(multiply(a));
let result2 = composition(10);
console.log(result2);

// 7. immutability
// definition: Immutability is a core concept of functional programming that
// states data should not be changed once it’s created.
let user = {
  name: "John",
  age: 25,
};

let newUser = { ...user };
newUser.age = 30;
console.log(user);

// 8. recursion
// definition: Recursion is a technique in programming where a function calls itself
// as a subroutine.
function sum(number = 0, result = 0) {
  if (number === 0) {
    return result;
  } else {
    result += number;
    number--;
    return sum(number, result);
  }
}
// 9. memoization
// definition: Memoization is an optimization technique used primarily to speed up
// computer programs by storing the results of expensive function calls and returning
// the cached result when the same inputs occur again.
let cache = {};
function memoization(number) {
  if (number in cache) {
    return cache[number];
  } else {
    let result = 0;
    if (number === 0) {
      return result;
    } else {
      result += number;
      number--;
      cache[number] = result;
      return memoization(number);
    }
  }
}

console.log(memoization(5)); // 15
console.log(cache); // {4: 10, 3: 6, 2: 3, 1: 1, 0: 0}

// 2*2/2+2 => 2*2 = 4/2 = 2+2 = 4
// 2*2/2+2 => 2*2 = 4/2 = 2+2 = 4
