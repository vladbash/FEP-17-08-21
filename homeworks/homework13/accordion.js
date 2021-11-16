class Accordion {
    constructor(el) {
        this._el = el;
    }

    init() {
        this._applyToAllContent((content, e, i) => {
            content.classList.add('hidden');
            e.setAttribute('data-id', i);
        });

        this._el.addEventListener('click', this._onAccordionClick);
    }

    _onAccordionClick = (e) => {
        if (e.target.classList.contains('item-header')) {
            this._toggleContentElement(e.target.nextElementSibling);
        }
    }

    _toggleContentElement(e) {
        e.classList.toggle('hidden');
        e.classList.toggle('active');
    }

    _applyToAllContent(cb) {
        Array.prototype.forEach.call(
            this._el.children, (parent, index) => {
                const [_, content] = parent.children;
                if (!content) {
                    throw new Error('Source element has incorrect structure!');
                }
                cb(content, parent, index);
            });
    }

    getOpenedIndexes() {
        const openedEls = document.getElementsByClassName('active');
        return Array.prototype.map.call(openedEls, e => {
            return +e.parentElement.dataset['id'];
        });
    }

    openItem(index) {
        const item = this._el.querySelector(`div[data-id="${index}"]`);
        this._toggleContentElement(item.children[1]);
    }

    addItem(header, content) {
        const headerEl = document.createElement('div');
        headerEl.classList.add('item-header');
        headerEl.innerText = header;

        const contentEl = document.createElement('div');
        contentEl.classList.add('item-content', 'hidden');
        contentEl.innerHTML = content;

        const itemEl = document.createElement('div');
        itemEl.classList.add('accordion-item');
        itemEl.append(headerEl, contentEl);
        itemEl.setAttribute('data-id', this._el.children.length);

        this._el.append(itemEl);
    }

    openAll() {
        this._applyToAllContent(e => {
            e.classList.contains('hidden') && this._toggleContentElement(e);
        });
    }

    closeAll() {
        this._applyToAllContent(e => {
            e.classList.contains('active') && this._toggleContentElement(e);
        });
    }
}