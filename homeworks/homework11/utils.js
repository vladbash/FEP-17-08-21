const VALIDATION_RULES = {
    EMAIL: 'email',
    REQUIRED: 'required'
};

function isEmail(value = '') {
    const segments = value.split('@');
    if (!segments[0] || segments.length != 2) return false;
    const domains = segments[1].split('.');
    const region = domains[domains.length - 1];
    if (domains.length > 1 && region.length > 1 && region.length <= 5) return true;
    return false;
}