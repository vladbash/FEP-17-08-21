const api = (() => {
    const API_URL = 'https://reqres.in/api';

    class Api {
        constructor() {
            this._xhr = new XMLHttpRequest();
        }

        login(email, password) {
            const request = new Promise((resolve, reject) => {
                this._xhr.open('POST', `${API_URL}/login`);
                this._xhr.setRequestHeader('content-type', 'application/json');
                this._xhr.send(JSON.stringify({
                    email,
                    password
                }));

                this._xhr.onload = (evt) => {
                    const response = JSON.parse(evt.currentTarget.responseText);
                    if (response.token) {
                        resolve(response);
                    } else {
                        reject(response)
                    }
                };
            });

            return request;
        }

        loginCb(email, password, responseCb) {
            this._xhr.open('POST', `${API_URL}/login`);
            this._xhr.setRequestHeader('content-type', 'application/json');
            this._xhr.send(JSON.stringify({
                email,
                password
            }));

            this._xhr.onload = (evt) => {
                const response = JSON.parse(evt.currentTarget.responseText);
                responseCb && responseCb(response);
            };
        }

        getUsers(page = 1, callback) {

            this._xhr.open('GET', `${API_URL}/users?page=${page}`, true);
            this._xhr.send();

            this._xhr.onload = (e) => {
                const { data, total_pages } = JSON.parse(e.currentTarget.responseText);
                callback && callback(data, total_pages);
            };
        };
    }

    return new Api();
})();
