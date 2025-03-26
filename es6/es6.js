// spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers];

// object spread operator
const person = {
  name: "Deppakkumar",
};

const personAge = {
  age: 33,
};

const newPerson = {
  ...person,
  ...personAge,
};

console.log(newPerson);

// Template literals
const _name = "Deppakkumar";
const age = 33;

let text = `My name is ${_name} and I am ${age} years old.`;
console.log(text);

// rest operator
function addValue(...a) {
  console.log(a);
}

addValue(1, 2, 3, 4, 5);

// Map
// def : Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let obj = {
  name: "Deppakkumar",
  age: 33,
};

const resultData = new Map(Object.entries(obj));

console.log(resultData.get("name"));
console.log(resultData.has("name1"));
console.log(resultData.size);
resultData.delete("name");
console.log(resultData.size);

// Convert Map to Object
const objData = Object.fromEntries(resultData);
console.log(objData);

// Set
// def : Set is a collection of values, where each value may occur only once.

const set = new Set([1, 2, 3, 4, 2, 3, 4, 1, 1, 1, 1, 1]);
set.add(5);
console.log(set);
console.log(set.size);
console.log(set.has(5));

// Convert Set to Array
const arr = Array.from(set);
console.log(arr);

// class
class Human {
  constructor(_name) {
    this.name = _name;
  }

  printName = () => {
    console.log(this.name);
  };
}

let human1 = new Human("Deepakkumar");
human1.printName(); // Deepakkumar

let human2 = new Human("Suraj");
human2.printName(); // Suraj

// Inheritance
class Employee extends Human {
  constructor(name, designation) {
    super(name);
    this.designation = designation;
  }

  printDesignation() {
    console.log(this.designation);
  }
}

let employee = new Employee("Deepakkumar", "Trainer");
employee.printDesignation();
employee.printName();
console.clear();
class Timer {
  timeOut = 1000;
  timeOutMessage = "Time ups !!!";
  printTimeOut() {
    setTimeout(function () {
      console.log(this);
      console.log(this.timeOutMessage);
    }, this.timeOut);
  }
}

let timer = new Timer();
timer.printTimeOut();
// generator
function* fun() {
  for (let i = 1; i <= 3; i++) {
    yield `${i} Step`;
  }
}

let gen = fun();
gen.next(); // { value: '1 Step', done: false }
gen.next(); // { value: '2 Step', done: false }
gen.next(); // { value: '3 Step', done: false }
gen.next(); // { value: undefined, done: true }
// iterator

let arr1 = [1, 2, 3, 4, 5];
let it = arr1[Symbol.iterator]();
it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: 4, done: false }
it.next(); // { value: 5, done: false }
it.next(); // { value: undefined, done: true }
// symbol
// proxy

// enum with symbols for traffic light
const TrafficLight = {
  RED: Symbol("red"),
  YELLOW: Symbol("yellow"),
  GREEN: Symbol("green"),
};

let currentLight = TrafficLight.RED;
console.log(currentLight === TrafficLight.RED); // true

// erp applicaiton user roles with enum symbols
const UserRole = {
  ADMIN: Symbol("admin"),
  USER: Symbol("user"),
  GUEST: Symbol("guest"),
};

// switch case with enum symbols
let userRole = UserRole.ADMIN;
switch (userRole) {
  case UserRole.ADMIN:
    console.log("Admin");
    break;
  case UserRole.USER:
    console.log("User");
    break;
  case UserRole.GUEST:
    console.log("Guest");
    break;
  default:
    console.log("Invalid Role");
}

const __name = "city";

let object = { location: "Ashoka Marg", [__name]: "nashik" };

console.log(object); //{location: "Ashoka Marg", city: "nashik"}

const ___name = Symbol("city");
let object1 = {
  location: "Ashoka Marg",
  [___name]: "nashik",
};
console.log(object1); //{location: "Ashoka Marg", Symbol(city): "nashik"}
object1[___name] = "Pune";

console.log(object1[___name]); // Pune
