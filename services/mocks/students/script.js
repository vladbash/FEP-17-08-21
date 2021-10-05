// // console.log(studentsMock.getStudentList(10));

// const someArray = [12, 33, 45, 42, 33, 12, 45, 90, 12, 66];

// function getMidValue(numbers) {
//     let median, medianRepeats = 0;
//     for(let i = 0; i < numbers.length; i++) {
//         let repeats = 0;
//         for (let j = 0;j < numbers.length; j++) {
//             if (numbers[i] === numbers[j]) {
//                 repeats++;
//                 if (repeats > medianRepeats) {
//                     medianRepeats = repeats;
//                     median = numbers[i];
//                 }
//             }
//         }
//     }
//     return median;
// }

const removeSymbols = arg => +arg
    .split('')
    .reduce((acc, e) => +e == +e ? acc + e : acc, '');

// const removeSymbols = arg => +arg
//     .split('')
//     .filter(e => +e == +e)
//     .join('');

console.log(removeSymbols('1s34f45f566hbl543'));
console.log(removeSymbols('0s94f5873flkj3984oij'));