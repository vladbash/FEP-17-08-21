const api = (() => {
    const API_URL = 'https://reqres.in/api';

    class Api {
        login(email, password) {
            return fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }).then(response => response.json());
        }

        getUsers(page = 1) {
            return fetch(`${API_URL}/users?page=${page}`).then(response => response.json());
        };
    }

    return new Api();
})();
