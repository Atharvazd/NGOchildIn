'use strict';

var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        res.render('index', model);
    });

    router.get('/donors', function (req, res) {
        res.render('index', {data : {url : 'donors'}});
    });

    router.get('/messages', function (req, res) {
        res.render('index', {data : {url : 'messages'}});
    });

    router.get('/login', function (req, res) {
        res.render('login');
    });
};
