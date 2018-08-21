'use strict';
var express = require('express');


function configure(app) {
    app.set('view engine', 'html');
    console.log('loading content routes using static path to dist directory');
    app.use(express.static(__base + '/dist'));

    app.use(function(req, res, next) {
        res.locals.ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        next();
    });
}
module.exports = configure;