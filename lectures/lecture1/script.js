// Variables
var variableName = 42;
let secondVariableName = '42';
const thirdVariableName = true;

variableName = 'new content';

// thirdVariableName = 42; // DON'T DO THAT

// newGVariable = 'some value'; // DON'T DECLARE VARIABLE WITHOUT OPERATOR

// Var names
var camelCase; // standard
var PascalCase;
var snake_case;
// kebab-case
// var azAZ09_$


// Data types
let numericVar = 42; // Number

let stringVar = 'some 12 text'; // String
let anotherStringVar = "some another text"; // String
let modernStringVar = `some modern text`; // String

let logicalVariable = true; // Boolean (Bool)

let nullVariable = null; // null
nullVariable = 42;
let undefinedVariable = undefined; // undefined
let anotherUndefinedVariable; // undefined

// Operators
// = - assignment operator
// , 
let first = 1, second = 2, third = 3;

// -,+,/,*,%
let sum = 1 + 2;
let dif = sum - 1;

let someStr = '42';
sum = someStr + 3;

// Number
const stringToNumber = Number('23'); // 23
const stringSentence = '23 years 1 old';
const anotherStringToNumber = Number(stringSentence); // NaN
// * const oneMoreStringToNumber = parseInt(stringSentence); // 23
const boolToNumber = Number(true); // 1
const nullToNumber = Number(null); // 0
const undefinedToNumber = Number(undefined); // NaN

const stringToNumber2 = 23 + +'42'; // 65
const anotherStringToNumber2 = '42' - 12;
const boolToNumber2 = true + true - 2;
const undefinedToNumber2 = undefined - 1 + 10;

// String
const numberToString = String(42); // '42'
const boolToString = String(true); // 'true'
const nullToString = String(null); // 'null'
const undefinedToString = String(undefined); // 'undefined'

const numberToString2 = 42 + '';

// Bool
const numberToBool = Boolean(10); // true
const anotherNumberToBool = Boolean(0); // false
const oneMoreNumberToBool = Boolean(+'dkhjdfjdf'); // false | Boolean(+'dkhjdfjdf') -> Boolean(NaN) -> false

const stringToBool = Boolean('dslkfd'); // true
const anotherStringToBool = Boolean(''); // false

const nullToBool = Boolean(null); // false
const undefinedToBool = Boolean(undefined); // false

const numberToBool2 = !!42; // !(!42) -> !(!true) -> !(false) -> true
const stringToBool2 = !!'fk'; // true

