const API_URL = 'https://reqres.in/api/users';
const userCardTemplate = document.getElementById('user-card-template').innerHTML;

const render = (template, bindings) => {
    let result = template;
    Object.keys(bindings).forEach(e => {
        result = result.replaceAll(`{{${e}}}`, bindings[e]);
    });
    return result;
};

const renderUserList = users => {
    const userListEl = document.getElementById('user-list');
    const templates = users
        .map(e => ({ ...e, name: `${e.first_name} ${e.last_name}` }))
        .map(e => render(userCardTemplate, e))
        .join('');

    userListEl.innerHTML = templates;
};

const getUsers = (page = 1, callback) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${API_URL}?page=${page}`, true);
    xhr.send();

    xhr.onload = (e) => {
        const { data, total_pages } = JSON.parse(e.currentTarget.responseText);
        callback && callback(data, total_pages);
    };
};

// (() => {
//     const actionPrevEl = document.getElementById('action-prev');
//     const actionNextEl = document.getElementById('action-next');
//     const pagesEl = document.getElementById('pages');
//     let globalPage = 1;

//     const renderCall = page => {
//         getUsers(page, users => {
//             renderUserList(users);
//         });
//     };

//     actionNextEl.addEventListener('click', e => {
//         renderCall(++globalPage);
//     });

//     actionPrevEl.addEventListener('click', e => {
//         renderCall(--globalPage);
//     });

//     pagesEl.addEventListener('click', e => {
//         if (e.target.classList.contains('nes-btn')) {
//             const { page } = e.target.dataset;
//             globalPage = page;
//             renderCall(page);
//         }
//     });

//     renderCall(globalPage);


// })();