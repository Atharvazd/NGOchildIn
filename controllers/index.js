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
          donor_id: 112,
          name: 'xxxx',
          contact: 'xxxx',
          email: 'xxxx',
          occasion: 'Wedding Anniversary',
          occasion_date: 'xxxx',
          additional_info: 'xxxx',
          supported_child: 'xxxx'
        },
        {
          donor_id: 121,
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
        }
      ]
    });
  });

  router.get('/child', function (req, res) {
    res.render('index', {
      url: 'child',
      child: [
        {
          child_id: 116,
          name: 'xxxx',
          dob: 'xxxx',
          additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
          supporter_donor: 'xxxx'
        },
        {
          child_id: 117,
          name: 'xxxx',
          dob: 'xxxx',
          additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
          supporter_donor: 'xxxx'
        },
        {
          child_id: 118,
          name: 'xxxx',
          dob: 'xxxx',
          additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
          supporter_donor: 'xxxx'
        },
        {
          child_id: 119,
          name: 'xxxx',
          dob: 'xxxx',
          additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
          supporter_donor: 'xxxx'
        },
        {
          child_id: 110,
          name: 'xxxx',
          dob: 'xxxx',
          additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
          supporter_donor: 'xxxx'
        }
      ]
    });
  });

  router.post('/messagesDonor', function (req, res) {
    console.log('messagesDonor',req.body);
    res.json({}).end()
    //res.render('index', {url : 'messages'});
  });

  router.post('/registerDonor', function (req, res) {
    console.log('registerDonor',req.body);
    res.json({}).end()
    //res.render('index', {url : 'messages'});
  });

  router.post('/updateDonor', function (req, res) {
    console.log('updateDonor',req.body);
    res.json({}).end()
    //res.render('index', {url : 'messages'});
  });

  router.post('/deleteDonor', function (req, res) {
    console.log('deleteDonor',req.body);
    res.json({}).end()
    //res.render('index', {url : 'messages'});
  });

  router.get('/login', function (req, res) {
    res.render('login');
  });
};
