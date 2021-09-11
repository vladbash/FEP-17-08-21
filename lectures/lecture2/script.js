/*
    plain text that describes variable
*/
// Error is here
// let myVar = 42
// alert(myVar)
// [1, 3, 4]

// Number, String, Boolean, undefined, null (Primitives)
// Object

// const person = {
//     name: 'Alex',
//     year: 1975,
//     sex: 'M',
//     married: true 
// };

// console.log(person.name, person.sex, person.married); // point

// console.log(person['year']); // []

// console.log(typeof person);

// // Array

// const array = [100, 95, 100, 65, 50];

// console.log(array[1]);

// console.log(typeof array);

// const student = {
//     name: 'John',
//     marks: [0, 85, 90, 100],
//     group: {
//         course: 'FEP',
//         startDate: '2021-08-17',
//         student: [
//             {
//                 name: 'Alex',
//                 marks: [95, 85, 100],
//             }
//         ]
//     }
// };

// console.log(String(student)); // '[object Object]'
// console.log(student + ''); // '[object Object]'

// console.log(Number(student)); // NaN

// const marks = [12, 'Alex', true, 100, '2021-08-20'];

// console.log(String(marks)); // 12,Alex,true,100,2021-08-20
// console.log(marks + ''); // 12,Alex,true,100,2021-08-20

// console.log(+marks);

// const anotherMarks = [1,2,3,4,500]; // '1,2,3,4,500' 
// console.log(+anotherMarks); // NaN

// const oneMoreMarks = [200,300];
// console.log(+oneMoreMarks); // ^ не NaN, если в системе разделитель дробной части ','

// console.log(student.group.startDate);
// console.log(student['group']['startDate']);

// const group = student['group'];
// console.log(group['startDate']);

// const secondStudent = {
//     1: 'test'
// };

// console.log(secondStudent);
// console.log(secondStudent[1]);
// console.log(secondStudent['1']);

// statements
// const age = +prompt('How old r u?');

// if (age > 5) { // >,<,==/===,>=,<=,!=/!== (true/false)
//     alert('Hello');
// } else {
//     alert('You are not allowed to be here!');
// }

// if (age > 5) {
//     alert('Kids content here');
// } else {
//     if (age > 3) {
//         alert('Babies content');
//     } else {
//         alert('You are not allowed to be here!');
//     }
// }

// if (age > 5)
//     console.log(age);
// else if (age > 3)
//     console.log(age);
// else
//     console.log(age);

// if (age > 5)
//     alert('Hello');
// console.log('hello!');
// else
//     alert('You are not allowed to be here!');

// ?:

// age > 5 ? alert('Kids content here') : alert('You are not allowed to be here!');

// const result = age > 5 ? 'Kids content here' : 'You are not allowed to be here!';

// alert(result);

// >,<
// const a = 5, b = 42;

// console.log(a > b, a < b);

// // >=,<=
// console.log(a >= b, !!(b >= a));

// if (a >= b) {
//     console.log('my message');
// }

// ==, ===
// const c = '5', d = 5;
// console.log(c == d);
// console.log(c === d);

// console.log(`'1' == 1`, '1' == 1); // -> 1 == 1 -> true
// console.log(`true == 1`, true == 1); // -> 1 == 1 -> true
// console.log(`'djjhd' == 1`, 'djjhd' == 1); // -> NaN == 1 -> false
// console.log(`null == 1`, null == 1); // -> 0 == 1 -> false
// console.log(`undefined == 1`, undefined == 1); // -> NaN == 1 -> false

// console.log(`'true' == true`, 'true' == true); // false
// console.log(`'-1' == true`, '-1' == true); // false
// console.log(`'1' == true`, '1' == true); // true

// console.log(`null == ''`, null == ''); // 'null' == ''
// const arr = [1,2];
// console.log(`arr == '1,2'`, arr == '1,2'); // '1,2' == '1,2' -> true
// console.log(`'undefined' == undefined`, 'undefined' == undefined); // false
// console.log('test' == 'test'); // true
// console.log();


// 
// const arr1 = [1,2];
// const arr2 = [1,2];

// console.log(arr1 == arr2); // false
// console.log(arr1 === arr2); // false

// const obj1 = {
//     name: 'Alex'
// };
// const obj2 = {
//     name: 'Alex'
// };
// console.log(obj1 == obj2); // false
// console.log(obj1 === obj2); // false

// !=, !==
const a = 5, b = 6;
console.log(a != b);
console.log(a !== b);

