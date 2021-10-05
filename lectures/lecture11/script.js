console.log(document);
console.dir(first);
first.autocapitalize = 'words';

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