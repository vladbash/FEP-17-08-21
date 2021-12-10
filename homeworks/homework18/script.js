const mainContainerEl = document.getElementById('main');

if (localStorage.getItem('token')) {
    onUserListLoad();
} else {
    onLoginPageLoad();
}

function onUserListLoad() {
    const userList = new UserListComponent(
        document.getElementById('user-list-template').innerText,
        document.getElementById('user-card-template').innerText,
        mainContainerEl
    );
}

function onLoginPageLoad() {
    const login = new LoginComponent(
        document.getElementById('login-template').innerText,
        mainContainerEl
    );

    login.onSuccess = onUserListLoad;
}