// // manual args
// function foo(arg1, arg2, arg3) {
//     const args = [arg1, arg2, arg3];

//     /**
//      * Some code
//      */

//     console.log(args);
// }

// // auto argument (arguments & facts)
// function bar(arg1, arg2, arg3) {
//     // arguments - pseudo-array
//     console.log(arguments);
// }

// const foo1 = function(arg1, arg2, arg3) {
//     console.log(arguments);
// }

// // rest-operator / spread-operator
// const bar1 = (...args) => {
//     console.log(args);
// };

// foo('foo', 123, true);
// bar('bar', 675, undefined);
// foo1('foo1', null);
// bar1('bar1', 123, true);

// const student = {
//     name: 'Alex',
//     doHomework: function() {
//         console.log(`I don't have enough time!`);
//     }
// };

// student.doHomework();

// function foo() {
//     console.log('function foo');
// }

// console.log(foo);

// const anotherObj = {
//     doSth: foo
// };

// anotherObj.doSth();

// const arr = [12, 42, 'some super element'];

// Add element to the end of array
// arr[arr.length] = 'some element';
// or
// arr.push('some element');

// console.log(arr);

// // Remove the last element
// console.log(arr.pop());

// console.log(arr);

// // Head
// console.log(arr.shift());
// console.log(arr);

// arr.unshift('new head element');
// console.log(arr);

// // Reverse array
// console.log(arr.reverse());
// console.log(arr);

// apply function per each element
// arr.forEach(function(element, index, array) {
//     console.log(element, index, array);
// });

// function forEach(array, callbackFunction) {
//     for (let index = 0; index < array.length; index++) {
//         callbackFunction(array[index]);
//     }
// }

// function doubleArgument(arg) {
//     console.log(arg * 2);
// }

// const anotherArr = [1, 3, 5, 7, 9];

// forEach(anotherArr, doubleArgument);

// const marks = [50, 33, 75, 22, 48];

// console.log('marks', marks);

// for (let index = 0; index < marks.length; index++) {
//     if (marks[index] < 50) {
//         marks[index] = 50;
//     }
// }

// console.log(marks);

// function modifyMark(mark) {
//     return (mark < 50) ? 50 : mark;
// }

// const modifiedMarks = marks.map(modifyMark);
// console.log('modifiedMarks', modifiedMarks);

// function map(array, callbackFunction) {
//     const result = [];
//     for (let index = 0; index < array.length; index++) {
//         const operationResult = callbackFunction(array[index]);
//         result.push(operationResult);
//     }
//     return result;
// }

// function marksPredicate(mark) {
//     return mark >= 50;
// }

// const highMarks = marks.filter(marksPredicate);
// console.log('highMarks', highMarks);

// function filer(array, callbackFunction) {
//     const result = [];
//     for (let index = 0; index < array.length; index++) {
//         if (callbackFunction(array[index])) {
//             result.push(array[index]);
//         }
//     }
//     return result;
// }

// const obj = {
//     name: 'Alex',
//     age: 23
// };

// console.log('obj', obj);

// const obj2 = obj;

// console.log('obj2', obj2);

// obj2.name = 'John';

// console.log('obj2', obj2);
// console.log('obj', obj);

// let a = 2;
// let b = a;

// console.log(a, b);

// a += 5;

// console.log(a, b);

// let student = {
//     name: 'Bob',
//     marks: [12, 10, 7, 12]
// };

// let bestStudent = student;

// student = {
//     name: 'Maria',
//     marks: [12, 12, 12, 12]
// };

// console.log(bestStudent, student);

// find
// const students = studentsMock.getStudentList(10);
// console.log(students);

// const checkName = function(e) {
//     if (e.name[0] === 'A') {
//         return true;
//     }
//     return false;
// };

// const aStudent = students.find(checkName);
// console.log(aStudent);

// function find(array, callbackFunction) {
//     for (let index = 0; index < array.length; index++) {
//         if (callbackFunction(array[index])) {
//             return array[index];
//         }
//     }
// }

// const obj = {};

// obj['name'] = 'Bob';
// obj['name'] = 'Alex';
// if(obj['age']) {
//     console.log('age');
// } else {
//     console.log('idk');
// }

// const markEntries = Object.entries(obj);

// console.log(markEntries);

// markEntries.sort();

