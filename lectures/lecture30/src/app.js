import { HomeContainer } from './containers';

import './styles/common.scss';

(() => {
    const containerEl = document.getElementById('main');

    containerEl.innerHTML +=
        HomeContainer();
})();