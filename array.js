// Arrays in javascript

// 1. forEach
// 2. find
// 3. filter
// 4. findIndex
// 5. includes
// 6. map
// 7. reduce
// 8. some
// 9. every
// 10. sort
// 11. reverse
// 12. slice
// 13. splice
// 14. concat
// 15. join
// 16. push
// 17. pop
// 18. shift
// 19. unshift
// 20. indexOf
// 21. lastIndexOf
// 22. isArray
// 23. toString
// 24. fill

// 1. forEach
let array = [40, 40, 30, 10, 50, 60, 70, 30, 80, 90, 100];
array.forEach((value, index) => {
  console.log(value, index);
});

// 2. find => return first element or undefined
let search = 60;
let result = array.find((value, index) => {
  return value === search;
});
console.log("search result is ", result);

// 3. filter => return array of elements or empty array
let search1 = 40;
let result1 = array.filter((value, index) => {
  return value === search1;
});
console.log("search result is ", result1);

// 4. findIndex => return index of first element or -1
let search2 = 40;
let result2 = array.findIndex((value, index) => {
  return value === search2;
});
console.log("search index result is ", result2);

// 5. includes => return true or false
let search3 = 100;
let result3 = array.includes(search3);
console.log("search includes result is ", result3);

// 6. map => return new array
let result4 = array.map((value, index) => {
  return `<li>${value * value}</li>`;
});
console.log("search map result is ", result4.join(""));

// 7. reduce => return single value
let result5 = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("search reduce result is ", result5);

// 8. some => return true or false
let search4 = 40;
let result6 = array.some((value, index) => {
  return value === search4;
});
console.log("search some result is ", result6);

// 9. every => return true or false
let search5 = 40;
let result7 = array.every((value, index) => {
  return value === search5;
});
console.log("search every result is ", result7);

// 10. sort => return sorted array
// let result8 = array.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });

//console.log("search sort result is ", result8);

// 11. reverse => return reversed array
//let result9 = array.reverse();
//console.log("search reverse result is ", result9);

// 12. slice => return sliced array
let result10 = array.slice(4, 7);
console.log("search slice result is ", result10);

console.log(array);
// 13. splice => return removed array form specific index
array.splice(4, 1); // index, delete count
console.log("search splice result is ", array);

// 14. concat => return new array
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let result11 = array1.concat(array2);
console.log("search concat result is ", result11);

// 15. join => return string
let result12 = array.join(" ");
console.log("search join result is ", result12);

// 16. push => add a element at the end of array
array.push(200);
console.log("search push result is ", array);

// 17. pop => remove a element from the end of array
array.pop();
array.pop();
console.log("search pop result is ", array);

// 18. shift => remove a element from the start of array
array.shift();
array.shift();
console.log("search shift result is ", array);

// 19. unshift => add a element at the start of array
array.unshift(300);
array.unshift(1);
console.log("search unshift result is ", array);

// 20. indexOf => return index of first element or -1
let search6 = 30;
let result13 = array.indexOf(search6);
console.log("search indexOf result is ", result13);

// 21. lastIndexOf => return index of last element or -1
let search7 = 30;
let result14 = array.lastIndexOf(search7);
console.log("search lastIndexOf result is ", result14);

// 22. isArray => return true or false
let result15 = Array.isArray(array);
console.log("search isArray result is ", result15);

// 23. toString => return string
let result16 = array.toString();
console.log("search toString result is ", result16);

// 24. fill => return filled array
let result17 = array.fill(0);
console.log("search fill result is ", result17);

// 25. flat => return flatten array
let array3 = [1, 2, [3, 4, [5, 6]]];
let result18 = array3.flat(2); // 2 is depth
console.log("search flat result is ", result18);
