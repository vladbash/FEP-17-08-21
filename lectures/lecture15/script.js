// function onClick(e) {
//     console.log(e);
//     // e.target // <- Element
// }

// document.getElementById('some-div').addEventListener('click', e => { 
//     console.log('div was clicked!'); 
//     // e.stopImmediatePropagation();
// }, {
//     capture: true
// });
// document.getElementById('some-li').addEventListener('click', () => { console.log('li was clicked!'); });
// document.getElementById('some-ul').addEventListener('click', () => { console.log('ul was clicked!'); });
// document.getElementById('some-main').addEventListener('click', () => { console.log('main was clicked!'); });
// document.getElementById('some-id').addEventListener('click', (e) => { 
//     console.log('button was clicked!');
//     e.stopPropagation();
// });

// document.body.addEventListener('click', e => {
//     console.log('body was clicked');
// });

// document.getElementById('super-block').addEventListener('click', (e) => {
//     console.log('block was clicked!');
//     // e.stopImmediatePropagation();
// }, {
//     capture: true
// });

// document.getElementById('super-btn').addEventListener('click', e => {
//     console.log('button was clicked!');
//     // e.stopPropagation();
// });

// document.getElementById('a-el').addEventListener('click', e => {
//     console.log('clicked');
//     e.preventDefault();
// });

// const els = document.getElementsByClassName('active');

// console.log(els);

// const nodes = document.querySelectorAll('.active');

// console.log(nodes);

// document.getElementById('super-btn').addEventListener('click', () => {
//     document.getElementById('demo-list').children[0].classList.add('active');
//     console.log(els);
//     console.log(nodes);
// });

// Closure

// function add(a) {
//     console.log(a);
//     return (b) => {
//         console.log(a);
//         console.log(b);
//         return a + b;
//     };
// }

// const initedSum = add(2);

// console.log(typeof initedSum); // function

// console.log(initedSum(4));

// // E.g.

// function map(array) {
//     return (cb) => {
//         return array.map(cb);
//     }
// }

// const students = [{
//     name: 'Alex'
// }, {
//     name: 'Bob'
// }];

// const studentsMap = map(students);

// console.log(
//     studentsMap(e => ({
//         ...e,
//         age: 18
//     }))
// );
