(() => {
    const taskInputEl = document.getElementById('task-form-input');
    const submitBtnEl = document.getElementById('task-form-submit');
    const listEl = document.getElementById('items-list');

    const itemTemplate = document.getElementById('item-template').innerHTML;

    // const onCheckboxClick = evt => {
    //     console.log(evt);
    //     evt.target.nextElementSibling.classList.toggle('span-checked');
    // };

    // const onItemRemove = evt => {
    //     console.log(evt);
    //     confirm('R u sure?') && evt.target.parentElement.remove();
    // };

    listEl.addEventListener('click', evt => {
        console.log(evt);
        if (evt.target.classList.contains('nes-btn')) {
            confirm('R u sure?') && evt.target.parentElement.remove();
        }
    });

    listEl.addEventListener('change', evt => {
        console.log(evt);
    });

    submitBtnEl.addEventListener('click', () => {
        const inputContent = taskInputEl.value;
        if (!inputContent) return;

        taskInputEl.value = '';

        const liEl = document.createElement('li');

        // Option 3

        liEl.innerHTML = itemTemplate.replace('{{inputContent}}', inputContent);

        // liEl.querySelector('.nes-checkbox').addEventListener('change', onCheckboxClick);
        // liEl.querySelector('button').addEventListener('click', onItemRemove);

        // Option 1
        // Хорошо, но не для этого раза!
        // liEl.innerHTML = `<label>
        //     <input type="checkbox" class="nes-checkbox" />
        //     <span>${inputContent}</span>
        // </label>`;

        // Option 2
        // const labelEl = document.createElement('label');
        // const checkboxEl = document.createElement('input');
        // const spanEl = document.createElement('span');

        // const removeBtnEl = document.createElement('button');

        // removeBtnEl.innerText = 'x';
        // removeBtnEl.classList.add('nes-btn', 'is-error');

        // removeBtnEl.addEventListener('click', onItemRemove);

        // checkboxEl.classList.add('nes-checkbox');
        // checkboxEl.setAttribute('type', 'checkbox');

        // checkboxEl.addEventListener('change', onCheckboxClick);

        // spanEl.innerText = inputContent;

        // labelEl.append(checkboxEl, spanEl, removeBtnEl);

        // liEl.append(labelEl);



        listEl.append(liEl);
    });
})();