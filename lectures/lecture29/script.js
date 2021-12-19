// function add(a, b) {
//     return a + b;
// }

// function add(a) {
//     return function (b) {
//         return a + b;
//     }
// }

// const curriedAdd = add(3);
// curriedAdd(42);

// ||

// add(3)(42);

function map(arr) {
    return function (cb) {
        // some code
    }
}

const student = {
    name: 'John',
    citizen: {
        country: 'Ukraine',
        city: {
            name: 'Odessa'
        }
    }
};

const student2 = {
    name: 'Ahmed',
    citizen: {
        country: 'Turkey'
    }
};

const getCity = pathOr('N/A')(['citizen', 'city', 'name']);

console.log(getCity(student));
console.log(getCity(student2));

function pathOr(orObj) {
    return function (path) {
        return function (obj) {

        };
    };
};


function add(a, b, c) {
    return a + b + c;
}

function log() {
    console.log('hello');
}

function curry(fn) {
    /* Implement curry function */
    const argLength = fn.length;
    const args = [];

    return function curried(...arg) {
        if (argLength) {
            args.push(...arg);
        }
        if (args.length >= argLength) {
            return fn(...args);
        } else {
            return curried;
        }
    }
}

const curriedLog = curry(log);

const curriedAdd = curry(add);

console.log(curriedAdd(1, 2)(3));
curriedLog();