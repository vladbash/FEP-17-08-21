const baseAccordion = new Accordion(document.getElementById('accordion-demo'));

baseAccordion.init();
baseAccordion.openItem(1);

console.log(baseAccordion.getOpenedIndexes());

baseAccordion.addItem('Test', '<p>Own content</p>');

setTimeout(() => {
    baseAccordion.openAll();
}, 5000);