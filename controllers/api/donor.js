'use strict';
var DonorModel = require('../../lib/api/models/DonorModel');
const DONOR_FIELDS = {
    ID: 'donor_id',
    NAME: 'name',
    CONTACT: 'contact',
    EMAIL: 'email',
    OCCASSION: 'occasion'
    OCCASSION_DATE: 'occasion_date'
    ADDITIONAL_INFO: 'additional_info'
    SUPPORTED_CHILD: 'supported_child'
    PASSWORD: 'password', //hashed
    TIME_CREATED: 'time_created'
};

function getDonorById(req, res) {
    DonorModel.getDonorById(req.params.DONOR_FIELDS.ID, function(err, model){
      if(!err)
        res.json(model);
      else {
        res.send(500, err)
      }
    });
}
function getDonorEmailById(req, res) {
    DonorModel.getDonorById(req.params.DONOR_FIELDS.ID, function(err, model){
      if(!err)
        res.json(model);
      else {
        res.send(500, err)
      }
    });
}
function getAllDonors(req, res) {
    var model = DonorModel.getAllDonors(function(err, model){
      if(!err)
        res.json(model);
      else {
        res.send(500, err)
      }
    });
}
function insertDonor(req, res){
  DonorModel.insertDonor(req.body.DONOR_FIELDS.NAME, req.body.DONOR_FIELDS.CONTACT, req.body.DONOR_FIELDS.EMAIL, req.body.DONOR_FIELDS.OCCASSION || "", req.body.DONOR_FIELDS.OCCASION_DATE || "", req.body.DONOR_FIELDS.ADDITIONAL_INFO || "", req.body.DONOR_FIELDS.SUPPORTED_CHILD || "", req.body.password || "password", function(err, model){
    if(!err){
      res.status(200);
      res.send({SUCCESS: true, DONOR_FIELDS.ID: model.insertId, message: 'donor insterted successfully'});
    }
    else {
      res.send(500, err);
    }
  });
}
function updateDonor(req, res){
    DonorModel.updateDonor(req.body.DONOR_FIELDS.ID, req.body, function(err, model){
      if(!err){
        res.status(200);
        res.send({SUCCESS: true, message: 'donor updated successfully'});
      }
      else {
        res.send(500, err);
      }
    });
  }
  function deleteDonorById(req, res){
    DonorModel.deleteDonorById(req.body.DONOR_FIELDS.ID, function(err, model){
      if(!err){
        res.status(200);
        res.send({SUCCESS: true, message: 'donor deleted successfully'});
      }
      else {
        res.send(500, err);
      }
    });
  }

module.exports = function (router) {
  router.get('/:id', getDonorById);
  router.get('/:id', getDonorEmailById)
  router.get('/', getAllDonors);
  router.post('/', insertDonor);
  router.post('/update', updateDonor);
  router.post('/delete', deleteDonorById);

};
