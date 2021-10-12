(() => {
    const btnEl = document.getElementById('submit-button');
    const inputEl = document.getElementById('text-field');

    // DON'T USE THAT 
    // btnEl.onclick = function () {
    //     console.log(inputEl.value);
    //     inputEl.value = '';
    // };

    // btnEl.onclick = function () {
    //     btnEl.classList.add('clicked');
    // };

    // btnEl.addEventListener('click', () => {
    //     console.log(inputEl.value);
    //     inputEl.value = '';
    // });

    // btnEl.addEventListener('click', () => {
    //     btnEl.classList.add('clicked'); 
    // });

    // handle once

    // 1
    // btnEl.onclick = function () {
    //     console.log('btn was clicked!');
    //     btnEl.classList.add('clicked');
    //     btnEl.onclick = null;
    // };

    // 2 - the best
    // function onBtnClick() {
    //     console.log('onBtnClick was applied');
    //     btnEl.classList.add('clicked');
    // }

    // btnEl.addEventListener('click', onBtnClick, {
    //     once: true
    // });

    // 3 
    // function onBtnClick() {
    //     console.log('onBtnClick was applied');
    //     btnEl.classList.toggle('clicked');
    // }

    // btnEl.addEventListener('click', onBtnClick);

    // btnEl.addEventListener('dblclick', () => {
    //     btnEl.removeEventListener('click', onBtnClick);
    //     console.log('onBtnClick handler was disabled');
    // });

    // btnEl.addEventListener('click', () => {
    //     btnEl.nextElementSibling.remove();
    // }, { once: true });

    // 1
    let i = 0;
    btnEl.addEventListener('click', () => {
        i++;
        const newPEl = document.createElement('p');
        newPEl.innerText = `Number ${i}`;

        const newSpanEl = document.createElement('span');
        newSpanEl.innerText = `Some span text for number ${i}`;

        // btnEl.nextElementSibling.append(newPEl, newSpanEl);
        // btnEl.nextElementSibling.prepend(newPEl, newSpanEl);
        // btnEl.nextElementSibling.insertBefore(
        //     btnEl.nextElementSibling.children[3],
        //     newPEl
        // );
        // btnEl.after(newSpanEl);
        // btnEl.before(newSpanEl);
        btnEl.nextElementSibling.insertBefore(newSpanEl, btnEl.nextElementSibling.children[2]);
    });

    // 2
    // let i = 0;
    // btnEl.addEventListener('click', () => {
    //     i++;
    //     btnEl.nextElementSibling.innerHTML += `
    //     <p> Number ${i} </p>
    //     `;
    // });

    // 3
    // document.write('<h1> Hello from write </h1>');

    // 4
    // btnEl.addEventListener('click', () => {
    //     const demoEl = document.createElement('span');
    //     demoEl.innerText = 'demo';

    //     // btnEl.nextElementSibling.insertAdjacentElement('afterbegin', demoEl);
    //     // btnEl.nextElementSibling.insertAdjacentElement('beforebegin', demoEl);
    //     // btnEl.nextElementSibling.insertAdjacentElement('afterend', demoEl);
    //     // btnEl.nextElementSibling.insertAdjacentElement('beforeend', demoEl);

    //     // btnEl.nextElementSibling.insertAdjacentHTML('afterbegin', `<span> demo </span>`);
    //     // btnEl.nextElementSibling.insertAdjacentHTML('beforeend', `<span> demo </span>`);

    //     // btnEl.nextElementSibling.insertAdjacentText('afterbegin', '<span>demo</span>');
    // });
    
})();