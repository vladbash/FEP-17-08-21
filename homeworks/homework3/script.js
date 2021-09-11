do {
    let operation = +prompt(`What do you want? 
        Choose the option: 
            1 - Sum, 
            2 - Dif, 
            3 - Mult,
            4 - Div,
            5 - Pow,
            6 - Sin,
            7 - Cos,
            Other - exit
    `);

    if (operation !== operation || operation > 7 || operation < 1) break;

    let firstOperand;
    do {
        firstOperand = +prompt(`Insert ${operation < 6 ? 'the first' : ''} operand`);
    } while (firstOperand !== firstOperand);

    let secondOperand;

    if (operation < 6) {
        do {
            secondOperand = +prompt('Insert the second operand');
        } while (secondOperand !== secondOperand);
    }

    let result;

    switch (operation) {
        case 1:
            result = firstOperand + secondOperand;
            break;
        case 2:
            result = firstOperand - secondOperand;
            break;
        case 3:
            result = firstOperand * secondOperand;
            break;
        case 4:
            result = firstOperand * secondOperand;
            break;
        case 5:
            result = firstOperand / secondOperand;
            break;
        case 6:
            result = Math.sin(firstOperand);
            break;
        case 7:
            result = Math.cos(firstOperand);
            break;
    }

    console.log(result);
    alert(result);

} while (confirm('Do you wanna repeat?'));

// let amount = 0;

// for (let i = 0; i < 10; i = confirm('Do you wanna repeat?')) {
//     console.log(amount);
// }


// switch works with ===
// const a = 1;

// switch(a) {
//     case '1':
//         console.log('string');
//         break;
//     case 1:
//         console.log('number');
//         break;
//     default:
//         console.log('idk var a');
//         break;
// }

// break, continue

// let i = 0;

// while (true) {
//     i++;
//     if (i % 2 !== 0) continue;
//     console.log('Hello ' + i);
//     if (i > 10) break;
// }