'use strict';

var TemplateModel = require('../../models/api/TemplateModel');
var TEMPLATE_FIELDS = require('../../config/constants/constants').TEMPLATE_FIELDS;

function getAllTemplates(req, res){
  TemplateModel.getAllTemplates(function(err, model){
    if(!err)
      res.send(model)
    else {
      res.send(500, err);
    }
  });
}
function getTemplateById(req, res) {
    TemplateModel.getTemplateById(req.params[TEMPLATE_FIELDS.ID], function(err, model){
      if(!err)
        res.json(model);
      else {
        res.send(500, err)
      }
    });
}
function updateTemplate(req, res){
    TemplateModel.updateTemplate(req.body[TEMPLATE_FIELDS.ID], req.body, function(err, model){
      if(!err){
        res.status(200);
        res.send({SUCCESS: true, message: 'template updated successfully'});
      }
      else {
        res.send(500, err);
      }
    });
  }
  function deleteTemplateById(req, res){
    TemplateModel.deleteTemplateById(req.body[TEMPLATE_FIELDS.ID], function(err, model){
      if(!err){
        res.status(200);
        res.send({SUCCESS: true, message: 'template deleted successfully'});
      }
      else {
        res.send(500, err);
      }
    });
  }

function insertTemplate(req, res){
  TemplateModel.insertTemplate(req.body[TEMPLATE_FIELDS.NAME], req.body[TEMPLATE_FIELDS.SUBJECT], req.body[TEMPLATE_FIELDS.DESCRIPTION], function(err, model){
    if(!err){
      res.status(200);
      res.send({SUCCESS: true, TemplateId: model.insertId, message: 'template insterted successfully'});
    }
    else {
      res.send(500, err);
    }
  });
}

module.exports = function (router) {
  router.get('/', getAllTemplates),
  router.get('/:id', getTemplateById),
  router.get('/', insertTemplate),
  router.post('/update', updateTemplate),
  router.post('/delete', deleteTemplateById)

};
