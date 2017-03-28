'use strict';

var DonationModel = require('../models/DonationModel');
var DONATION_FIELDS = require('../../config/constants/constants').DONATION_FIELDS;
function getAllDonations(req, res) {
    var model = DonationModel.getAllDonations(function(err, model){
      if(!err)
        res.json(model);
      else {
        res.send(500, err)
      }
    });
}
function getDonationsByDonorId(req, res) {
      DonationModel.getDonationsByDonorId(req.params.id, function(err, model){
        if(!err)
          res.json(model);
        else {
          res.send(500, err)
        }
      });
  }
  function getDonationsById(req, res) {
        var model = DonationModel.getDonationsById(req.params.id, function(err, model){
          if(!err)
            res.json(model);
          else {
            res.send(500, err)
          }
        });
    }
    function getDonationsInTimeRange(req, res) {
          var model = DonationModel.getDonationsInTimeRange(req.body.startTime, req.body.endTime,function(err, model){
            if(!err)
              res.json(model);
            else {
              res.send(500, err)
            }
          });
      }
      function getDonationsInTimeRangeByDonorId(req, res) {
            var model = DonationModel.getDonationsInTimeRangeByDonorId(req.params.donor_id, req.body.startTime, req.body.endTime,function(err, model){
              if(!err)
                res.json(model);
              else {
                res.send(500, err)
              }
            });
        }
        function getDonationsInTimeRangeByChildId(req, res) {
              var model = DonationModel.getDonationsInTimeRangeByChildId(req.params[DONATION_FIELDS.CHILD_ID],req.body.startTime, req.body.endTime,function(err, model){
                if(!err)
                  res.json(model);
                else {
                  res.send(500, err)
                }
              });
          }
      function insertDonation(req, res){
        DonationModel.insertDonation(req.body.DonorId, req.body.ChildId, req.body.Amount, req.body.DonatedOn, req.body.description, function(err, model){
          if(!err){
            res.status(200);
            res.send({SUCCESS: true, DonationId: model.insertId, message: 'donation insterted successfully'});
          }
          else {
            res.send(500, err);
          }
        });

      }

module.exports = function (router) {
  router.get('/', getAllDonations);
  router.get('/donor/:id', getDonationsByDonorId);
  router.get('/child/:id', getDonationsByChildId);
  router.get('/:id', getDonationsById);
  router.get('/time/', getDonationsInTimeRange);
  router.get('/time/:donor_id', getDonationsInTimeRangeByDonorId);
  router.get('/time/:child_id', getDonationsInTimeRangeByChildId);
  router.post('/', insertDonation);
  router.post('/update', updateDonation);

};
