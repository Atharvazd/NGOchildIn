'use strict';
const DBConnector = require('../../lib/dbconnector');
const helper = require('../../lib/helper');

const DONOR_TABLE_NAME = 'Donor';
var DONOR_FIELDS = require('../../config/constants/constants').DONOR_FIELDS;

module.exports = {
    isValidLogin: function(email, password, callback) {
        DBConnector.query("SELECT * FROM " + DONOR_TABLE_NAME + " WHERE " + DONOR_FIELDS.EMAIL + " = '" + email + "', " + DONOR_FIELDS.PASSWORD + " = '" + password + "'", function(err, rows, fields) {
            let isValidLogin = false;
            if (!err)
                return callback(err);
            else
                return callback(!!(rows && rows.length));
        });
    }
};
