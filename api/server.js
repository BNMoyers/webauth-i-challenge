//dependencies and imports
const express = require('express');

const apiRouter = require('./api-router');
const configureMiddleware = require('./configure-middleware');

//server
const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);

//export
module.exports = server;
