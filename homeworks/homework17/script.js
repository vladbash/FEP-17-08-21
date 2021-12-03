const mainContainerEl = document.getElementById('main');

const login = new LoginComponent(
    document.getElementById('login-template').innerText,
    mainContainerEl
);

login.onSuccess = onSuccessLogin;

function onSuccessLogin() {
    const userList = new UserListComponent(
        document.getElementById('user-list-template').innerText,
        document.getElementById('user-card-template').innerText,
        mainContainerEl
    );
}

// setTimeout(() => {
//     console.log('');
// }, 3000);

// Promise
// - inited
// - fulfilled
// - rejected 

// - then(e => {})
// - catch(e => {})
// - finally(e => {})

// const asyncAction = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('some message');
//     }, 1000);
// });

// asyncAction
//     .then(e => {
//         console.log(e);
//         return e.toUpperCase();
//     })
//     .then(e => {
//         console.log(e);
//     })
//     .catch(e => {
//         console.error(e);
//         return e;
//     })
//     .finally(() => {
//         console.log('[Finally]');
//     });