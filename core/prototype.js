// String

// console.log(typeof text);
// console.log(String);

// Constructor function (ES5)
function Human() {}

Human.prototype.sing = function () {
  console.log("hi");
};
Human.prototype.walk = function () {};

function Student() {}
// prototype inheritance
Student.prototype = Object.create(Human.prototype);

const student = new Student();
student.sing();

String.prototype.more = function () {
  let text = this.toString();

  return {
    len: text.length,
    uc: text.toUpperCase(),
    text: text,
  };
};

let text = "gigame";
let text2 = "deepakkumar";
let text3 = 3;

console.log(text.more());

console.log(text3.more());
