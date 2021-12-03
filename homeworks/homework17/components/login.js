class LoginComponent {
    constructor(template, containerEl) {
        this._template = template;
        this._containerEl = containerEl;

        this.onSuccess = () => {};

        this.render();
    }

    onSubmit() {
        const email = this._containerEl.querySelector('#email_field').value;
        const password = this._containerEl.querySelector('#password_field').value;

        // api.loginCb(email, password, (response) => {
        //     if (response.token) {
        //         this.onSuccess && this.onSuccess(response.token);
        //     }
        // });

        api.login(email, password)
            .then(e => {
                this.onSuccess && this.onSuccess(e.token);
            });
    }

    render() {
        if (!this._containerEl) return;

        this._containerEl.innerHTML = render(this._template, {});

        this._containerEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('nes-btn')) this.onSubmit(e);
        });
    }
}