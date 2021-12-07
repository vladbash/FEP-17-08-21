// micro-/macro- tasks

// micro-
// Promise

// fetch('https://reqres.in/api/users')
//     .then(response => {
//         return response.json();
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(e => {
//         console.error(e);
//     });

// marco-
// setTimeout, setInterval, DOM-events

// setTimeout(() => {
//     console.log('timeout was applied!');
// }, 3000);

// setInterval(() => {
//     console.log('i');
// }, 3000);

// console.log('first');

// for (let index = 0; index < 1e3; index++) {
//     console.log(index);
// }

// for (let index = 0; index < 1e7; index++) {
//     document.getElementById('demo').innerText = index;
// }

// setTimeout(() => {
//     console.log('39. Timeout'); // 4 | 4 | 5
// }, 3000);

// const promise = new Promise((res, rej) => {
//     console.log('43. Promise executor'); // 1 | 2
//     if (true) {
//         res(42);
//     }
// });

// promise.then(e => {
//     console.log(`49. ${e}`); // 3 | 3
// });

// console.log(`53. Some console.log`); // 2 | 1

// setTimeout(() => {
//     console.log('55. Timeout'); // 5 | 5 | 4
// }, 0);

// fetch

// GET
// fetch('https://reqres.in/api/users')
//     .then(response => {
//         return response.json();
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(e => {
//         console.error(e);
//     });

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify({
        name: "morpheus",
        job: "leader"
    }),
    headers: {
        'content-type': 'application/json'
    }
})
    .then(e => e.json())
    .catch(e => { /* ... */})
    .then(e => {
        console.log(e);
    })
    .catch(e => { /* ... */});

// async/await

async function getUsers() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();

        console.log(response);
        console.log(data);

        return data;
    } catch (e) {
        console.error(e);
    } finally {
        console.log('finally was applied');
    }
}

const users = getUsers();

console.log(users);