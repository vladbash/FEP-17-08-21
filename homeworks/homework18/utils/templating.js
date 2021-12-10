const render = (template, bindings) => {
    let result = template;
    Object.keys(bindings).forEach(e => {
        result = result.replaceAll(`{{${e}}}`, bindings[e]);
    });
    return result;
};