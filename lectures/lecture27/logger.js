const fs = require('fs');
const fsPromises = require('fs/promises');

const createLogFile = (fileName = `log_${new Date().toISOString()}.log`) => {
    // fs.access('./server.js', (error) => {
    //     if (!error) {
    //         // do smt
    //     } else {
    //         console.log(error);
    //     }
    // }); // (error, payload) => {};

    if (fs.existsSync(fileName)) {
        console.error(`file with name ${fileName} exists!`);
        return;
    }
    // return new Promise((res, rej) => {
    //     fs.appendFile(fileName, '', error => {
    //         if (error) rej(error);
    //         else res();
    //     });
    // });
    return fsPromises.appendFile(fileName, '');
};

const appendDataToLog = (message, fileName = `log_${new Date().toISOString()}.log`) => {
    let logPipeline = Promise.resolve();
    message = `[${new Date()}] ${message}\n`;
    if (!fs.existsSync(fileName)) {
        logPipeline = createLogFile(fileName);
    }

    // return logPipeline.then(() => {
    //     return new Promise((res, rej) => fs.appendFile(fileName, `[${new Date()}] ${message}\n`, err => err ? rej(err) : res()));
    // });
    return logPipeline.then(() => {
        return fsPromises.open(fileName);
        // fs.writeFile(fileName, message, { flag: 'a+' }, () => { });
        // const stream = fs.createWriteStream(fileName);
        // stream.write(message);
        // return new Promise((res, rej) => stream.end('\n', e => e ? rej(e) : res()));
    }).then(file => {
        return file.write(message);
        
    }).then(file => {
        file.close();
    });
};

const demoFunc = () => {
    // fsPromises.copyFile('./server.js', './server.copy.js');
    // fsPromises.mkdir('logs');
    // TBD
    // fsPromises.open('./server.js').then(e => {
    //     console.log(e);
    // });

    // fsPromises.opendir('.');
    // fsPromises.readFile('./server.copy.js').then(e => {
    //     return e.toString();
    // }).then(e => {
    //     console.log(e);
    // });
};

module.exports = {
    createLogFile,
    appendDataToLog,
    demoFunc
};