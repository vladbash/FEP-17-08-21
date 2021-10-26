const USERS = {
    ['admin@gmail.com']: '12345',
    ['admin1@gmail.com']: '4553664',
    ['admin2@gmail.com']: '3323',
    ['admin3@gmail.com']: '456323edffdds',
    ['admin4@gmail.com']: 'Pksdjdsjfdm22i9sdcjuw',
};

function checkCreds(login = '', password = '') {
    return USERS[login] === password;
}