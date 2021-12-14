function getRandomNumber() {
    return 42;
}

function printCurrentDate() {
    const current = new Date();
    console.log(current.toISOString());
    console.log(current.toString());
    console.log(current.toJSON());
    console.log(current);
}

module.exports = {
    getRandomNumber,
    printCurrentDate
};

// module.exports.getRandomNumber = () => {
//     return 42;
// }

// module.exports.printCurrentDate = () => {
//     const current = new Date();
//     console.log(current.toISOString());
//     console.log(current.toString());
//     console.log(current.toJSON());
//     console.log(current);
// }
