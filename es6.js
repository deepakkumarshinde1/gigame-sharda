// es6 topics
// 1. const & let
// 2. destructing
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let n1 = array[0];
// let n2 = array[1];
// let list = array.slice(2)
let [n1, n2, ...list] = array;
console.log(n1, n2); // 1,2
console.log(list);
// 3. spread operator
// 4. rest parameter
// 5. template literals
// 6. object literals shorthand
// 7. generator
// 8. iterators
// 9. map
// 10. set
// 11. proxy
// 13. Symbol

// let [name, updateNama] = useState('data') // => [value, function(){}];
