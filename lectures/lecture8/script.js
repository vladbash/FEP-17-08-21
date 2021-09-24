// Arrays intersection
// 
// function intersection(firstArr, secondArr) {
//     return firstArr.filter(el => {
//         const e = secondArr.find(secondElement => el === secondElement);
//         return e || e === 0;
//     });
// }

// const arrF = [12, 45, 87, 42, 14, 90, 2];
// const arrS = [56, 99, 2, 45, 14, 90, 85];

// const resultingArray = intersection(arrF, arrS);
// console.log('[2, 45, 14, 90] ===', resultingArray);

// Strings methods

const myStr = '    test Test test    ';

// split
console.log(myStr.split('test'));

// replace
console.log(myStr.replace(' ', '|'));
// console.log(myStr.replace(/ /g, '|'));

// replaceAll
console.log(myStr.replaceAll(' ', '|'));

// substr
console.log(myStr.substr(5));
console.log(myStr.substr(5, 2));

// slice
console.log(myStr.slice(3, 6));

// toUpper/toLower
console.log(myStr.toUpperCase());
console.log(myStr.toLowerCase());

// trim
console.log(myStr.trim());
console.log(myStr.trimEnd());
console.log(myStr.trimStart());

// indexOf
console.log(myStr.indexOf('s'));
console.log(myStr.indexOf('a'));
console.log(myStr.lastIndexOf('s'));

if (myStr.indexOf('s') > -1) {}

// includes
console.log(myStr.includes('s'));

const array = [12, 22, 45, 32];

// join
console.log(array.join('|'));

// reduce
const sum = array.reduce((acc, e) => {
    return acc + e;
}, 0);

console.log(sum);