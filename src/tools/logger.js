const chalk = require('chalk');
const time = require('./time.js');

module.exports = (msg = 'Hello world', type = 'log') => {
    function log(message, color) {
        return console.log(`[${time()} (${chalk[color](type.toUpperCase())})]: ${message}`);
    }

    switch (type.toLowerCase()) {
        case 'log': return log(msg, 'grey');
        case 'error': return log(msg, 'red');
        case 'info': return log(msg, 'blue');
        case 'warn': return console.log(`[${time()} (${chalk.keyword('orange')(type.toUpperCase())})]: ${msg}`);
        default: return log(msg, 'black')
    }
}