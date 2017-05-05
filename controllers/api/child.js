'use strict';

var ChildModel = require('../../models/api/ChildModel');
var CHILD_FIELDS = require('../../config/constants/constants').CHILD_FIELDS;

function getChildById(req, res) {
    ChildModel.getChildById(req.params.id, function(err, model) {
        if (!err)
            res.json(model);
        else {
            res.send(500, err);
        }
    });
}

function getAllChildren(req, res) {
    var model = ChildModel.getAllChildren(function(err, model) {
        if (!err)
            res.json(model);
        else {
            res.send(500, err);
        }
    });
}

function insertChild(req, res) {
    ChildModel.insertChild(req.body[CHILD_FIELDS.NAME], req.body[CHILD_FIELDS.DOB], req.body[CHILD_FIELDS.ADDITIONAL_INFO], req.body[CHILD_FIELDS.SUPPORTED_DONOR], function(err, model) {
        if (!err) {
            res.status(200);
            res.send({
                SUCCESS: true,
                ChildId: model.insertId,
                message: 'Child Registered Successfully'
            });
        } else {
            res.send(500, err);
        }
    });
}

function updateChild(req, res) {
    ChildModel.updateChild(req.body[CHILD_FIELDS.ID], req.body, function(err, model) {
        if (!err) {
            res.status(200);
            res.send({
                SUCCESS: true,
                message: 'child updated successfully'
            });
        } else {
            res.send(500, err);
        }
    });
}

function deleteChildById(req, res) {
    ChildModel.deleteChildById(req.body[CHILD_FIELDS.ID], function(err, model) {
        if (!err) {
            res.status(200);
            res.send({
                SUCCESS: true,
                message: 'child deleted successfully'
            });
        } else {
            res.send(500, err);
        }
    });
}


module.exports = function(router) {
    router.get('/:id', getChildById);
    router.get('/', getAllChildren);
    router.post('/', insertChild);
    router.post('/update', updateChild);
    router.post('/delete', deleteChildById);
};
