function sum(operand1, operand2) {
    const result = operand1 + operand2;
    return result;
}

function dif(operand1, operand2) {
    return operand1 - operand2;
}

function mult(operand1, operand2) {
    return operand1 * operand2;
}

function div(operand1, operand2) {
    return operand1 / operand2;
}

function sin(operand) {
    return Math.sin(operand);
}

function getNumberFromPrompt(promptDesc) {
    let result;
    do {
        result = +prompt(promptDesc);
    } while (result !== result);
    return result;
}

function generateResult(operation, result) {
    return `Operation ${operation} finished with result ${result}`;
}

function displayHistory(history) {
    for (let i = 0; i < history.length; i++) {
        console.log(`${i + 1}. ${history[i]}`);
    }
}

function main() {
    const history = [];
    do {
        const operation = +prompt(`What do you want? 
        Choose the option: 
            1 - Sum, 
            2 - Dif, 
            3 - Mult,
            4 - Div,
            6 - Sin,
            7 - History,
            Other - exit
    `);

        if (operation === 7) {
            displayHistory(history);
            continue;
        }

        if (operation !== operation || operation > 7 || operation < 1) break;

        const firstOperand = getNumberFromPrompt(`Insert ${operation < 6 ? 'the first' : ''} operand`);

        let secondOperand;

        if (operation < 6) {
            secondOperand = getNumberFromPrompt('Insert the second operand');
        }

        let result;

        switch (operation) {
            case 1: {
                const sumResult = sum(firstOperand, secondOperand);
                result = generateResult('sum', sumResult);
            }
                break;
            case 2:
                result = generateResult('dif', dif(firstOperand, secondOperand));
                break;
            case 3:
                result = generateResult('mult', mult(firstOperand, secondOperand));
                break;
            case 4:
                result = generateResult('div', div(firstOperand, secondOperand));
                break;
            case 6:
                result = generateResult('sin', sin(firstOperand));
                break;
            case 7:
                displayHistory(history);
                break;
        }

        console.log(result);
        alert(result);
        history[history.length] = result;

    } while (confirm('Do you wanna repeat?'));
    displayHistory(history);
}

main();