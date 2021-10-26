(() => {
    const formEl = document.getElementById('login-form'),
        loginInputEl = document.getElementById('login-input'),
        passwordInputEl = document.getElementById('password-input');

    function validate(rules = [VALIDATION_RULES.REQUIRED]) {
        return e => {
            const { value } = e.target;
            if (rules.includes(VALIDATION_RULES.REQUIRED) && !value) {
                e.target.classList.add('invalid');
                return;
            }
            if (rules.includes(VALIDATION_RULES.EMAIL) && !isEmail(value)) {
                e.target.classList.add('invalid');
                return;
            }

            e.target.classList.remove('invalid');
        };
    }

    loginInputEl.addEventListener('blur', validate([VALIDATION_RULES.EMAIL, VALIDATION_RULES.REQUIRED]));
    passwordInputEl.addEventListener('blur', validate());
    formEl.addEventListener('submit', e => {
        e.preventDefault();

        const login = loginInputEl.value,
            password = passwordInputEl.value;

        if (checkCreds(login, password)) {
            const greetingEl = document.createElement('span');
            greetingEl.innerText = 'Welcome, master!';

            formEl.parentElement.append(greetingEl);
            formEl.remove();
            return;
        }
        const errorEl = document.getElementById('login-error') || document.createElement('span');
        errorEl.innerText = 'Invalid credentials!';
        if (!errorEl.id) {
            errorEl.id = 'login-error';
        }
        formEl.append(errorEl);
    });
})();