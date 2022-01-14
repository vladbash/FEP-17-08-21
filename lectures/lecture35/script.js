// function* gen() {
//     console.log('first message');
//     yield 1;

//     console.log('second message');
//     yield 2;

//     console.log('third message');
//     return 3;
// }

// const iter = gen();

// console.log(iter.next());

// console.log('pause 1');

// console.log(iter.next());

// console.log('pause 2');

// console.log(iter.next());

// console.log('pause 3');

// console.log(iter.next());

const obj = {
    first: 1,
    second: 2,
    third: 3,
    [Symbol.iterator]: function* () {
        yield this.first;
        yield this.second;
        yield this.third;
    }
};

for (const iterator of obj) {
    console.log(iterator);
}