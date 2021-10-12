(() => {
    const btnEl = document.getElementById('submit-button');
    const inputEl = document.getElementById('text-field');

    btnEl.onclick = function () {
        console.log(inputEl.value);
        inputEl.value = '';
    };
})();