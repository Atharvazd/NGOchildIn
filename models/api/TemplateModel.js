'use strict';
const DBConnector = require('../../lib/dbconnector');
const helper = require('../../lib/helper');

const TEMPLATE_TABLE_NAME = 'Template';
var TEMPLATE_FIELDS = require('../../config/constants/constants').TEMPLATE_FIELDS;

module.exports = {
    TEMPLATE_TABLE_NAME,
    TEMPLATE_FIELDS,
    getAllTemplates: function(callback) {
        DBConnector.query("SELECT * FROM " + TEMPLATE_TABLE_NAME, callback);
    },

    getTemplateById: function(template_id, callback) {
        DBConnector.query("SELECT * FROM " + TEMPLATE_TABLE_NAME + " WHERE " + TEMPLATE_FIELDS.ID + " = " + template_id, callback);
    },

    deleteTemplateById: function(template_id, callback) {
        DBConnector.query("DELETE FROM " + TEMPLATE_TABLE_NAME + " WHERE " + TEMPLATE_FIELDS.ID + " = " + template_id, callback);
    },

    insertTemplate: function(name, subject, description, callback) {
        const time_created = helper.getCurrentMySQLDate();
        DBConnector.query("INSERT INTO " + TEMPLATE_TABLE_NAME + " (" + TEMPLATE_FIELDS.NAME + ", " + TEMPLATE_FIELDS.SUBJECT + ", " +
            TEMPLATE_FIELDS.DESCRIPTION + ", " + TEMPLATE_FIELDS.TIME_CREATED + ") VALUES ('" +
            name + "', '" + subject + "', '" + description + "', '" + time_created + "')", callback);
    },

    updateTemplate: function(template_id, data, callback) {
        delete data[TEMPLATE_FIELDS.ID];
        let updateString = '';
        let updateValsArr = Object.keys(data).map((key) => {
            return key + "='" + data[key] + "'";
        });
        updateString = updateValsArr.join(',');
        DBConnector.query("UPDATE " + TEMPLATE_TABLE_NAME + " SET " + updateValsArr + " WHERE " + TEMPLATE_FIELDS.ID + " = " + child_id, callback);
    }
};
