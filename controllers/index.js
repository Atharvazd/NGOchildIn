'use strict';

var IndexModel = require('../models/index');


module.exports = function (router) {

  var model = new IndexModel();

  router.get('/', function (req, res) {
    res.render('index', model);
  });

  router.get('/donors', function (req, res) {
    res.render('index', {
      url: 'donors',
      donor: [
        {
          donor_id: 11,
          name: 'xxxx',
          contact: 'xxxx',
          email: 'xxxx',
          occasion: 'Birthday',
          occasion_date: 'xxxx',
          additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
          supported_child: 'xxxx'
        },
        {
          donor_id: 111,
          name: 'xxxx',
          contact: 'xxxx',
          email: 'xxxx',
          occasion: 'NIL',
          occasion_date: 'xxxx',
          additional_info: 'xxxx',
          supported_child: 'xxxx'
        },
        {
          name: 'xxxx',
          contact: 'xxxx',
          email: 'xxxx',
          occasion: 'Wedding Anniversary',
          occasion_date: 'xxxx',
          additional_info: 'xxxx',
          supported_child: 'xxxx'
        },
        {
          name: 'xxxx',
          contact: 'xxxx',
          email: 'xxxx',
          occasion: 'Birthday',
          occasion_date: 'xxxx',
          additional_info: 'xxxx',
          supported_child: 'xxxx'
        },
        {
          name: 'xxxx',
          contact: 'xxxx',
          email: 'xxxx',
          occasion: 'Birthday',
          occasion_date: 'xxxx',
          additional_info: 'xxxx',
          supported_child: 'xxxx'
        },
        {
          name: 'xxxx',
          contact: 'xxxx',
          email: 'xxxx',
          occasion: 'Birthday',
          occasion_date: 'xxxx',
          additional_info: 'xxxx',
          supported_child: 'xxxx'
        },
        {
          name: 'xxxx',
          contact: 'xxxx',
          email: 'xxxx',
          occasion: 'Birthday',
          occasion_date: 'xxxx',
          additional_info: 'xxxx',
          supported_child: 'xxxx'
        },
        {
          name: 'xxxx',
          contact: 'xxxx',
          email: 'xxxx',
          occasion: 'Birthday',
          occasion_date: 'xxxx',
          additional_info: 'xxxx',
          supported_child: 'xxxx'
        },
      ]
    });
  });

  router.get('/messages', function (req, res) {
    res.render('index', {url : 'messages'});
  });

  router.get('/login', function (req, res) {
    res.render('login');
  });
};
