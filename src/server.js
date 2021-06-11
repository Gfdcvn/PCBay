const express = require('express');
const path = require('path');
const logger = require('./tools/logger.js');

const app = express();

app.use(
    express.static(path.resolve(__dirname, '..', 'public'), {
        extensions: ['html', 'htm'],
        index: false
    })
);

app.get('/', (_req, res) => {
    return res.redirect('/home');
});

app.listen(8000, () => {
    console.clear();
    logger('Running on http://localhost:8000/', 'info');
});