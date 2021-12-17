console.log('app');

const userName = 'John Doe';
const userAttributes = {
    name: 'John',
    citizen: 'IT',
    rating: 87.3
};

for(let attribute in userAttributes) {
    console.log(attribute);
}