// if ([]) {
//     console.log('Unreal condition');
// } else if(5 > 3) {
//     console.log('More real condition');
// } else {}

// let a = 5;

// switch (a) {
//     case 4:
//         console.log('a is 4');
//         break;
//     case 5: {
//         console.log('a is 5');
//         a *= 2;
//     }
//         break;
//     case 10:
//         console.log('a is 10');
//         break;
//     default:
//         console.log('a is undefined');
// }

// && 

// const a = 4;

// if (a > 0 && a < 5) {
//     console.log('some code');
// }

// // const b = a > 0 && 12;
// // console.log('b: ', b);

// // a > 0 && console.log('a is greater then 0');

// a > 0 && console.log('a is greater then 0') && console.log('42');

// ||

// const a = 472;

// // !(a % 2)
// if (a > 0 || a % 2 === 0) {
//     console.log('a is even');
// }

// const b = a > 0 || 12;

// console.log(b);

// loops

// let accum = 0;

// while (accum < 10) {
//     console.log(`accum is ${accum}`);
//     // accum += 1;
//     accum++;
// }

// let a = 0;

// console.log(a++); // 0
// console.log(a); // 1
// console.log(++a); // 2

// let number = 0;
// console.log(number);
// while (number < 10) {
//     console.log('[while] number is NaN');
//     number++;
// }

// console.log(number);

// do {
//     console.log('[do/while] number is NaN');
// } while(number !== number);

// for (let i = 0; i < 10; i++) {
//     console.log(`for [${i}]`);
//     i = 15;
// }

// const someArray = [12, 42, 1, 34, 67, 55];

// for(let i = 0; i < someArray.length; i++) {
//     someArray[i] *= 2;
// }

// console.log(someArray);

// for(let e of someArray) {
//     e *= 3;
// }

// console.log(someArray);

// const obj = {
//     key: 'value'
// };

// for(let k in obj) {
//     console.log(obj[k]);
// }

// Don't use for arrays
// for(let k in someArray) {
//     console.log(k);
// }

// const arr = [1,2,3];

// console.log(arr+'', arr.length + '');

// arr[3] = 4;

// console.log(arr+'', arr.length + '');

// arr[99] = 420;

// for(let i = 0;i< arr.length;i++) {
//     console.log(arr[i]);
// }

// console.log(arr, arr.length + '');

// const length = +prompt('Insert array length: ');
// const arr = [];

// for(let i = 0;i< length;i++) {
//     arr[i] = +prompt('Insert value: ');
// }

// console.log(arr);

// function

// function introduce(name) {
//     console.log(`My name is ${name}`);
// }

// introduce();
// introduce('Alex');

// function sumDigits(first, second) {
//     console.log('sum is ', first + second);
// }


// sumDigits(12, 56);
// sumDigits(65);
// sumDigits(2, 92);

// function sumDigits(first, second) {
//     const sum = first + second;
//     return sum;
// }

// const mySumResult = sumDigits(12, 3);

// console.log(mySumResult);