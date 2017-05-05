'use strict';
const DBConnector = require('../../lib/dbconnector');
const helper = require('../../lib/helper');

const DONOR_TABLE_NAME = 'Donor';
var DONOR_FIELDS = require('../../config/constants/constants').DONOR_FIELDS;

module.exports = {
    DONOR_TABLE_NAME,
    DONOR_FIELDS,
    getAllDonors: function(callback) {
        DBConnector.query("SELECT * FROM " + DONOR_TABLE_NAME, callback);
    },

    getDonorById: function(donor_id, callback) {
        DBConnector.query("SELECT * FROM " + DONOR_TABLE_NAME + " WHERE " + DONOR_FIELDS.ID + " = " + donor_id, callback);
    },

    deleteDonorById: function(donor_id, callback) {
        DBConnector.query("DELETE FROM " + DONOR_TABLE_NAME + " WHERE " + DONOR_FIELDS.ID + " = " + donor_id, callback);
    },

    insertDonor: function(name, contact, email, occasion, occasion_date, additional_info, supported_child, password, callback) {
        const time_created = helper.getCurrentMySQLDate();
        DBConnector.query("INSERT INTO " + DONOR_TABLE_NAME + " (" + DONOR_FIELDS.NAME + ", " + DONOR_FIELDS.CONTACT + ", " +
            DONOR_FIELDS.EMAIL + ", " + DONOR_FIELDS.OCCASION + ", " + DONOR_FIELDS.OCCASION_DATE + ", " + DONOR_FIELDS.ADDITIONAL_INFO + ", " +
            DONOR_FIELDS.SUPPORTED_CHILD + ", " + DONOR_FIELDS.PASSWORD + ", " + DONOR_FIELDS.TIME_CREATED + ") VALUES ('" +
            name + "', '" + contact + "', '" + email + "', '" + occasion + "', '" + occasion_date + "', '" + additional_info + "', '" +
            supported_child + "', '" + password + "', '" + time_created + "')", callback);
    },

    getDonorEmailById: function(donor_id, callback) {
        DBConnector.query("SELECT " + DONOR_FIELDS.EMAIL + " FROM " + DONOR_TABLE_NAME + " WHERE " + DONOR_FIELDS.ID + " = " + donor_id, callback);
    },

    updateDonor: function(donor_id, data, callback) {
        delete data[DONOR_FIELDS.ID];
        let updateString = '';
        let updateValsArr = Object.keys(data).map((key) => {
            return key + "='" + data[key] + "'";
        });
        updateString = updateValsArr.join(',');
        DBConnector.query("UPDATE " + DONOR_TABLE_NAME + " SET " + updateValsArr + " WHERE " + DONOR_FIELDS.ID + " = " + donor_id, callback);
    }
};
