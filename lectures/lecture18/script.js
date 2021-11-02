// const someNumber = new Number('12');

// console.log(someNumber === 12);

// function Number_(value) {
//     this.value = value;
//     return +value;
// }

// const someNum = Number_('42');

// const someObjNum = new Number_('42');

// console.log(someNum);
// console.log(someObjNum);

// function SomeConstruct(name, value) {
//     this.name = name;
//     this.value = value;

//     return {
//         valueOf: `${name} ${value}`
//     };
// }

// const someObj = SomeConstruct('test', 42);
// const someObj2 = new SomeConstruct('hello!', 2);

// console.log(someObj);
// console.log(someObj2);

// class SomeClass {
//     constructor(name) {
//         this.name = name;
//     }

//     someMethod() {
//         console.log(this.name);
//     }
// }

// const obj = new SomeClass('Bob');
// // const objValue = SomeClass();
// console.log(obj);
// 'use strict';

// function Foo(value) {
//     this.value = value;

//     this.logValue = function () {
//         console.log(this.value);
//     };
// }

// Foo.someStaticMethod = () => {
//     console.log('static log');
// };

// const obj = new Foo(42); 
// const obj1 = new Foo(23);
// const obj2 = new Foo(56);

// console.log(obj.logValue === obj1.logValue); // false

// // const { logValue } = obj;
// // logValue();

// class Bar {
//     static doSmt() {
//         console.log('doSmt is static');
//     }
// }

// Object.keys({ key: '', value: '', type: '' }); // -> ['key', 'value', 'type']

// Prototype
function Foo() {}

const a = new Number(8); // Object
console.dir(a);
