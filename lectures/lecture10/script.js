// const myStr = '    hello    hillel   a  students';

// const words = myStr.split(' ');
// const capitalWords = words.map(e => {
//     const rest = e.slice(1);
//     return e[0].toUpperCase()+rest;
// });
// const result = capitalWords.join(' ');

// console.log(result);

// function capitalize(str) {
//     return str
//         .split(' ')
//         .map(e => e ? e[0].toUpperCase() + e.slice(1) : e)
//         .join(' ');
// }

// const result = capitalize(myStr);
// console.log(result);

// Call stack
// function foo() {
//     return 1 + bar();
// }

// function bar() {
//     return buz() * 50;
// }

// function buz() {
//     return foo();
// }

// function main() {
//     const value = foo();
//     console.log(value);
// }

// main();

// Recursion

function foo(a, b) {
    foo(a, b);
}

// 1 - error handling

function doSomething(arr) {
    // if (error) {
    //    doSomething(arr);
    // }
}

// 2 - проходка по сложным структурам данных

function displayTree(tree) {
    /* 
    if (isPlain(tree)) {
        console.log(tree);
    } else {
        const next = getLeftRight(tree);
        displayTree(next.left);
        displayTree(next.right);
    }
    */
}

// 3 - 
function accSum(numbers) {
    if (numbers === 1) {
        return 1;
    }
    return numbers + accSum(numbers - 1);
}

console.log(accSum(13));