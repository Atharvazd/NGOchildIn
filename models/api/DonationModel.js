'use strict';
const DBConnector = require('../../lib/dbconnector');
const helper = require('../../lib/helper');
const DonorModel = require('./DonorModel');

const DONATION_TABLE_NAME = 'Donor';

var DONATION_FIELDS = require('../../config/constants/constants').DONATION_FIELDS;
/*
 * All Donor related fields also present for consistency with data provided from Bank
 */

module.exports = {
    DONATION_TABLE_NAME,
    DONATION_FIELDS,
    getAllDonations: function(callback) {
        DBConnector.query("SELECT * FROM " + DONATION_TABLE_NAME, callback);
    },

    getDonationsByDonorId: function(donor_id, callback) {
        DonorModel.getDonorEmailById(donor_id, function(err, rows, fields) {
            let donor_email = '';
            const EMAIL_COL_NAME = DonorModel.DONOR_FIELDS.EMAIL;
            if (!err)
                return callback(err);
            else
                donor_email = rows.length > 0 && rows[0][EMAIL_COL_NAME] || '';
            DBConnector.query("SELECT * FROM " + DONATION_TABLE_NAME + " WHERE " + DONATION_FIELDS.DONOR_EMAIL + " = " + donor_email, callback);
        });
    },

    getDonationsById: function(donation_id, callback) {
        DBConnector.query("SELECT * FROM " + DONATION_TABLE_NAME + " WHERE " + DONATION_FIELDS.ID + " = " + donation_id, callback);
    },

    getDonationsByChildId: function(child_id, callback) {
        DBConnector.query("SELECT * FROM " + DONATION_TABLE_NAME + " WHERE " + DONATION_FIELDS.CHILD_ID + " = " + child_id, callback);
    },

    /*
     * Provide startTime, endTime in standard ISO format. Use new Date().toISOString();
     * eg: 2017-03-26T09:49:10.609Z
     */
    getDonationsInTimeRange: function(startTime, endTime, callback) {
        let startDate = helper.isoTimeToMySQLDate(startTime);
        let endDate = helper.isoTimeToMySQLDate(endTime);
        DBConnector.query("SELECT * FROM " + DONATION_TABLE_NAME + " WHERE " + DONATION_FIELDS.DATE + " >= '" + startDate + "', " + DONATION_FIELDS.DATE + " <= '" + endDate + "'", callback);
    },

    getDonationsInTimeRangeByChildId: function(child_id, startTime, endTime, callback) {
        let startDate = helper.isoTimeToMySQLDate(startTime);
        let endDate = helper.isoTimeToMySQLDate(endTime);
        DBConnector.query("SELECT * FROM " + DONATION_TABLE_NAME + " WHERE " + DONATION_FIELDS.CHILD_ID + " = " + child_id + ", " + DONATION_FIELDS.DATE + " >= " + startDate + ", " + DONATION_FIELDS.DATE + " <= " + endDate, callback);
    },

    getDonationsInTimeRangeByDonorId: function(donor_id, startTime, endTime, callback) {
        let startDate = helper.isoTimeToMySQLDate(startTime);
        let endDate = helper.isoTimeToMySQLDate(endTime);
        DonorModel.getDonorEmailById(donor_id, function(err, rows, fields) {
            let donor_email = '';
            const EMAIL_COL_NAME = DonorModel.DONOR_FIELDS.EMAIL;
            if (!err)
                return callback(err);
            else
                donor_email = rows.length > 0 && rows[0][EMAIL_COL_NAME] || '';
            DBConnector.query("SELECT * FROM " + DONATION_TABLE_NAME + " WHERE " + DONATION_FIELDS.DONOR_EMAIL + " = " + donor_email + ", " + DONATION_FIELDS.DATE + " >= " + startDate + ", " + DONATION_FIELDS.DATE + " <= " + endDate, callback);
        });
    },

    insertDonation: function(child_id, purpose, donor_gender, donor_dob, donor_address, donor_profession, donor_name, donor_email, donor_pan, amount, description, callback) {
        const time_created = helper.getCurrentMySQLDate();
        DBConnector.query("INSERT INTO " + DONATION_TABLE_NAME + " (" + DONATION_FIELDS.CHILD_ID + ", " + DONATION_FIELDS.PURPOSE + ", " +
            DONATION_FIELDS.DATE + ", " + DONATION_FIELDS.DONOR_GENDER + ", " + DONATION_FIELDS.DONOR_DOB +
            ", " + DONATION_FIELDS.DONOR_ADDRESS + ", " + DONATION_FIELDS.DONOR_PROFESSION + ", " + DONATION_FIELDS.DONOR_NAME +
            ", " + DONATION_FIELDS.DONOR_EMAIL + ", " + DONATION_FIELDS.DONOR_PAN + ", " + DONATION_FIELDS.AMOUNT +
            ", " + DONATION_FIELDS.DESCRIPTION + ") VALUES ('" + child_id + "', '" + purpose + "', '" + time_created + "', '" + donor_gender +
            "', '" + donor_dob + "', '" + donor_address + "', '" + donor_profession + "', '" + donor_name + "', '" + donor_email +
            "', '" + donor_pan + "', '" + amount + "', '" + description + "')", callback);
    },

    updateDonation: function(donation_id, data, callback) {
        delete data[DONOR_FIELDS.ID];
        let updateString = '';
        let updateValsArr = Object.keys(data).map((key) => {
            return key + "='" + data[key] + "'";
        });
        updateString = updateValsArr.join(',');
        DBConnector.query("UPDATE " + DONATION_TABLE_NAME + " SET " + updateValsArr + " WHERE " + DONATION_FIELDS.ID + " = " + donation_id, callback);
    }
};
