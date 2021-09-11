// console.log(typeof foo); // function
// foo();

// // Function declaration
// function foo() {
//     console.log('foo was applied');
// }

// console.log(typeof bar); // undefined
// // bar();

// // Function expression
// var bar = function() {
//     console.log('bar was applied');
// };

// console.log(typeof bar); // function
// bar();

// // {
// //     function bar() {}
// // }

// // IIFE immediately invoked functional expression
// (function() {
//     console.log('anonym function');
// })();

// function apply(cb, args) {
//     cb(args);
// }

// apply(function(text) {
//     console.log(text);
// }, 'Some text');

// apply((arr) => {
//     console.log(arr[0] + arr[1]);
// }, [12, 42]);

// // FE - arrow function
// const buz = (text, num) => {
//     console.log(text, num);
// };

// console.log(typeof buz);
// buz('Hello', 3);

// var, const, let

console.log(a);

var a = 12;

console.log(b);

let b = 13; // const