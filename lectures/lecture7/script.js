// console.log(someVar);
// console.log(someLet);

// /*


//     some code


// */

// var someVar = 42;
// let someLet = 'some variable value';

// console.log(someVar);

// function foo() {
//     console.log(42);
//     if (true) {
//         var a = 'a';
//     }
//     console.log(a);
// }

// console.log(a);
// function bar() {
//     console.log(42);
//     const pi = 3.14;
//     if (true) {
//         let a = 'a';
//         console.log(pi);
//     }
//     console.log(a);
// }

// foo();
// bar();

// function buz() {
//     for (let index = 0; index < 1; index++) {
//         for (let j = 0; j < 1; j++) {
//             for (let k = 0; k < 1; k++) {
//                 var a = 4;
//             }
//         }

//     }
//     console.log(a);
// }

// buz();

// const b = 'bbb';
// function fiz() {
//     if (true) {
//         if (true) {
//             if (true) {
//                 let a = 42;
//                 console.log(a);
//                 if (true) {
//                     let a = 'aaa';
//                     console.log(b);

//                 }
//             }
//             if (true) {
//                 let a = 78;
//                 console.log(a);
//             }
//         }
//     }
//     console.log(a);
// }

// fiz();
'use strict';

function foo() {
    var a = (b = (c = 42));
    console.log(a);
    console.log(b);
    console.log(c);
}

foo();

console.log(c);
console.log(b);
console.log(a);