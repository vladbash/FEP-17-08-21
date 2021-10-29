// function getSomeName() {
//     // console.log(this);
//     return this.name;
// }

// const obj = {
//     name: 'Alex',
//     age: 42,
//     getName: getSomeName,
//     // getAge() {
//     //     return this.age;
//     // }
// };

// const student = {
//     name: 'Bob',
//     getStudentName: getSomeName
// };


// console.log(obj.getName()); // Alex
// console.log(student.getStudentName()); // Bob
// console.log(getSomeName());


// `this` rules

// 1. `this` forms when a function is being called/applied
// 'use strict';
// const foo = function() {
//     console.log(this);
// };

// const obj = {
//     a: 2,
//     foo: foo
// };

// const obj2 = {
//     b: 3,
//     foo: obj.foo // foo
// };

// obj.foo(); // { a: 2, foo... }
// obj2.foo(); // !{ a: 2, foo.. } // { b: 3, foo... }

// foo(); // window{...}
// foo(); // undefined

// 2. function method bind

// function someFunction() {
//     console.log(this.a);
//     console.log(this);
// }

// const newBoundFoo = someFunction.bind({
//     a: 12,
//     b: 42
// });

// newBoundFoo();

// const newObj = {
//     a: 99,
//     b: 185,
//     foo: newBoundFoo
// };

// newObj.foo();

// const anotherNewFoo = newBoundFoo.bind({
//     a: 99
// });

// anotherNewFoo();

// function sum(a, b) {
//     this.result = a + b;
//     return this.result;
// }

// const preinitedSum = sum.bind({}, 10);

// console.log(preinitedSum(42, 1));

// another example

// function push(initValue, newElement) {
//     this.values = [...(this.values || initValue), newElement];
// }

// const students = {};

// const pushToStudentsArray = push.bind(students, [
//     { name: 'Alex', age: 23 },
//     { name: 'John', age: 22 }
// ]);

// pushToStudentsArray({ name: 'Bob', age: 24 });

// console.log(students);

// 3. call/apply

// function someFoo(a, b, c) {
//     this.result = a + b + c;
// }

// const sum = {};

// // call
// // someFoo.call(sum, 12, 42, 65);

// // apply
// someFoo.apply(sum, [12, 45, 69]);

// console.log(sum);

// const { forEach } = Array.prototype;

// // const array = [];

// // array.map()

// const spanEls = document.getElementsByTagName('span');

// forEach.call(spanEls, (e, i) => {
//     e.innerText = `${i}. some value`;
// });

// 4. operator `new`

// function pow2(a) {
//     this.square = a * a;
// }

// function Foo(a = '') {
//     this.a = a;

//     this.upperA = this.a.toUpperCase();

//     this.pow2 = pow2;//.bind({});
// }

// const fooObj = new Foo('some value', 10);
// const newObj = new Foo('new value for obj', 11);
// const someObj = new Foo('sooooo', 6);

// fooObj.pow2(12);

// const obj = {
//     pow: fooObj.pow2
// };

// obj.pow(122);
// console.log(obj);

// console.log(fooObj);
// console.log(newObj);
// console.log(someObj);

// const numValue = Number('3456');
// const numObj = new Number('3456');

// console.log(numValue);
// console.log(numObj);

// const userComponent = {
//     user: {
//         name: 'John',
//     },
//     onClick: function(e) {
//         console.dir(this);
//         console.log(`${this.user.name} clicked on btn`);
//     }
// };

// document.getElementsByTagName('button')[0].addEventListener('click', userComponent.onClick.bind(userComponent));

// const student = {
//     profile: {
//         name: 'Alex'
//     },
//     doSmt: () => {
//         this.
//     }
// }

// const userComponent = {
//     user: {
//         name: 'John',
//     },
//     onClick: (e) => {
//         console.dir(this);
//         console.log(`${this.user.name} clicked on btn`);
//     }
// };

// document.getElementsByTagName('button')[0].addEventListener('click', () => {
//     userComponent.onClick();
// });


// function Student(name) {
//     this.name = name;

//     this.getName = () => {
//         return this.name;
//     };

//     this.getAnotherName = function() {
//         return this.name;
//     };
// }

// const obj = new Student('Bob');

// const { getName, getAnotherName } = obj;

// console.log(getName());
// console.log(getAnotherName());

// function foo() {
//     this.meth = () => {
//         console.log(this);
//     };
// }

// const obj = {
//     a: 42,
//     foo: foo
// };

// obj.foo();

// const { meth } = obj;
// const newMeth = meth.bind(this);
// newMeth();