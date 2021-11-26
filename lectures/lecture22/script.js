// XHR -> XMLHttpRequest

// GET

// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://reqres.in/api/users', false);

// xhr.send();

// console.log(typeof xhr.response);

// const { data: users } = JSON.parse(xhr.response);

// console.log(users);


const xhr = new XMLHttpRequest();

xhr.open('POST', 'https://reqres.in/api/users', false);

xhr.setRequestHeader('content-type', 'application/json');

xhr.send(JSON.stringify({
    name: "morpheus",
    job: "leader"
}));

console.log(xhr.response);