// OOP 

// Encapsulation

/**
 * class Car {
 *      constructor() {}
 *      
 *      public start() {
 *          if (this.checkFuelLevel() === 0 || this.checkOilLevel() === 0) {
 *              throw new Error('Please, fill the tank');
 *              return;
 *          }
 *          this.startGenerator();
 *      }
 * 
 *      public drive() {
 *          this.checkABS();
 *      }
 * 
 *      private checkFuelLevel() {}
 * 
 *      private checkOilLevel() {}
 * 
 *      private startGenerator() {}
 * 
 *      private checkABS() {}
 * }
 * 
 * const myCar = new Car();
 * 
 * myCar.start();
 */


// _
// class Car {
//     constructor() {}

//     start() {

//     }

//     drive() {}

//     _checkFuelLevel() {}

//     _checkOilLevel() {}
// }

// const myCar = new Car();

// myCar._checkFuelLevel();


// closure

// function Foo(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;

//     const privateFoo = () => {
//         console.log(this.a, this.b, this.c);
//     }

//     this.doSmt = () => {
//         console.log(this.c);
//         privateFoo();
//     };
// }

// const obj = new Foo(13, 44, 55);

// obj.doSmt();

// console.log(obj);


// # private fields (ES2021)

// class PrivateClass {
//     #someField;

//     constructor() {
//         this.#someField = 42;
//     }

//     doSth() {
//         this.#privateMethod();
//     }

//     #privateMethod() {
//         console.log('Private method was applied!', this.#someField);
//     }
// }

// const obj = new PrivateClass();

// obj.doSth();

// Polymorphism

// 1 + 1 = 2
// '12' + '12' = '1212'

// function someFunction(a) {
//     console.log('Some function with one arg was applied');
// }

// function someFunction(a, b, c) {
//     console.log('Some function with three arg was applied');
// }

// someFunction(12);

// someFunction(12, 34, 33);

// abstraction

class FeedError extends Error {
    constructor({ error, message }) {
        super(message);
        this.error = error;
    }
}

class Domestic {
    constructor(name) {
        this.name = name;
        this.age = 22;
    }

    saySmt() {
        console.log('I do nothing!');
    }

    // abstract
    feed() {
        throw new Error(`Method feed isn't implemented!`);
    }
}

class Dog extends Domestic {
    constructor(name) {
        super(name);
    }

    feed(meal) {
        console.log(`What a ${meal}, om nom nom!!`);
    }

    saySmt() {
        console.log('bow bow!');
        console.log('I am ', super.age);
        super.saySmt();
    }
}

class Cow extends Domestic {
    constructor(name) {
        super(name);
    }

    feed(meal, amount) {
        if (meal !== 'grass') {
            throw new FeedError({ error: 1, message: `Cow has allergy on ${meal}` });
        }
        if (amount < 2) {
            throw new FeedError({ error: 2, message: `Cow is hungry!` });
        }
        console.log('Cow is happy!');
    }
}

const myDog = new Dog('Rex');
const myCow = new Cow('Dolly');

myDog.feed('bone');
myDog.saySmt();

try {
    myCow.feed();
} catch(e) {
    console.log('Error happened!', e);
}

let meal = 'beef';
let amount = 1;

function feedCow(a, b) {
    try {
        myCow.feed(a, b);
    } catch (e) {
        console.error(e);
        if (e.error == 1) {
            meal = 'grass';
        }
        if (e.error == 2) {
            amount++;
        }
        feedCow(meal, amount);
    }
}

feedCow(meal, amount);