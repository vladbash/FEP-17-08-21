class UserListComponent {
    constructor(template, cardTemplate, containerEl) {
        this._template = template;
        this._userCardTemplate = cardTemplate,
        this._containerEl = containerEl;

        this.list = [];

        this.onSuccess = () => { };

        this.loadUsersList();
    }

    loadUsersList(page = 1) {
        api.getUsers(page, (users, pages) => {
            this.list = users;
            this.render();
        });
    }

    render() {
        if (!this._containerEl) return;

        this._containerEl.innerHTML = render(this._template, {});

        const listEl = this._containerEl.querySelector('#user-list');

        console.dir(listEl);

        listEl.innerHTML = this.list
            .map(e => ({ ...e, name: `${e.first_name} ${e.last_name}` }))
            .map(e => render(this._userCardTemplate, e))
            .join('');

        // this._containerEl.addEventListener('click', (e) => {
        //     if (e.target.classList.contains('nes-btn')) this.onSubmit(e);
        // });
    }
}