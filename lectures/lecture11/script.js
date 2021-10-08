console.log(document);
console.dir(document.body.children[0]);

// don't use global vars
// console.dir(first);
// first.autocapitalize = 'words';


// !!!!DON'T DO THAT!!!!
// document
//     .children[0]
//     .children[1]
//     .children[0]
//     .children[0]
//     .innerText = 'demo';


// Element by ID

// Good
// const el = document.getElementById('first');

// el.innerText = 'it was got by id!';

// Bad
// !!DON'T DO THAT!!!
// first.innerText = 'was set with global var';


// Elements by Tag name

// const els = document.getElementsByTagName('span');

// for(let i = 0; i < els.length; i++) {
//     els[i].innerText = els[i].innerText + i;
// }

// Elements by ClassName

// const els = document.getElementsByClassName('secondary');

// for (let i = 0; i < els.length; i++) {
//     els[i].innerText = els[i].innerText + ' with class secondary';
// }

const first = document.getElementById('first');

// classList

// adds class to Element
first.classList.add('class-added-by-js');

// removes class from Element
first.classList.remove('first-styles');

// check if class is presented
console.log(first.classList.contains('class-added-by-js'));
console.log(first.classList.contains('first-styles'));

// replaces class with another one
first.classList.replace('class-added-by-js', 'new-class');

// adds class if it is presented and removes in opposite case
first.classList.toggle('new-class');

console.log(first.classList.value);

console.dir(first);

console.log(first.dataset.id);

const main = document.getElementsByTagName('main')[0];
console.dir(main);

function onButtonClick() {
    console.log('btn was clicked!');
}

const btnEl = document.getElementById('demoBtn');
btnEl.onclick = onButtonClick;




