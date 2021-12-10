function privateFunction() {
    return null;
}

export function someFunction() {
    let a = 42;
    const arr = [];
    for (let index = 0; index < 200; index++) {
        a = a**index;
        arr.push(a);
    }
    return arr;
}

export const calc = {
    add: (a, b) => a + b
};

// export {
//     calc,
//     someFunction
// };

export default function () {}