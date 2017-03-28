'use strict';

var LoginModel = require('../models/LoginModel');

function isValidLogin(req, res) {
  console.log(req.body);
    LoginModel.isValidLogin(req.body.DONOR_FIELDS.EMAIL, req.body.DONOR_FIELDS.PASSWORD, function(err, model){
      if(!err){
      res.status(200);
      res.send({SUCCESS: true, EmailId: model.DONOR_FIELDS.EMAIL});
    }
      else {
        res.send(500, err);
      }
    });
}

module.exports = function (router) {
  router.post('/', isValidLogin);
};
