// variables
// scopes
// functions
// clousers
// event loop
// async javascript
// oop
// prototyping
// functional programming
// throttling and deboundin

var text = "deepakkumar"; // old (es5)
let text2 = "deepakkumar"; // new (es6)
const text3 = "deepakkumar"; // new (es6) ECMA Script

var text = "hello";

text2 = "hello";

let text4;
text4 = "deepakkumar";

const text5 = 10;

let a = "s"; // string
let b = 10; // number
let c = 10.5; // number
let d; // undefined
let e = true; // boolean

let f = null; // object
let i = [10, 20, 30, 40]; // object
let h = { name: "deepak", location: "india" }; // js object

console.log(typeof h);

function add(a, b) {
  return a + b;
}

let r1 = add(10, 20);
let r2 = add(b, c);

let number = 1; // globally
function funOne() {
  let number = 10; // local

  if (2 == 2) {
    let number = 30; // block
    console.log(number);
  }

  console.log(number);
}

funOne();
console.clear();
// var => local & global
// let , const  => local ,global ,block
console.log(v1);
// fun();
var v1 = 10;
let v2 = 20;
const v3 = 30;

// function fun() {
//   console.log("hi");
// }

// closures in javascript
function fun() {
  let count = 0; // lexical scope variable

  return function () {
    count++;
    console.log(count);
  }; // closures function;
}

let child = fun();
child();
child();
child();
child();
child();

// common function
// function funFun() {}

// function expression
// let funFun = function () {};

function counter() {
  let count = 0;

  return {
    inc() {
      count++;
      this.print();
    },
    dec() {
      count--;
      this.print();
    },
    print() {
      console.log(count);
    },
  };
}

let countObject = counter();
countObject.inc();
countObject.inc();
countObject.inc();
countObject.inc();
countObject.dec();

// 5 type of function
// #1 function definition
function fun1() {}

// #2 function expression
let fun2 = function () {};

// function expression with arrow
let fun4 = () => {};

// #3 callback function
fun3(function () {
  // callback function
});

// callback function with arrow
fun3(() => {
  // callback function
});

// #4 IIFE function
(function () {})();

// IIFE function with arrow
(() => {})();

// #5 arrow function
() => {};
