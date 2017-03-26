'use strict';
const DBConnector = require('../../lib/dbconnector');
const helper = require('../../lib/helper');

const DONOR_TABLE_NAME = 'Donor';
const DONOR_FIELDS = {
    ID: 'id',
    NAME: 'name',
    EMAIL: 'email',
    MOBILE: 'mobile',
    PASSWORD: 'password', //hashed
    TIME_CREATED: 'time_created'
};

module.exports = {
    DONOR_TABLE_NAME,
    DONOR_FIELDS,
    getAllDonors: function(callback){
        DBConnector.query("SELECT * FROM " + DONOR_TABLE_NAME, callback);
    },

    getDonorById: function(donor_id, callback){
        DBConnector.query("SELECT * FROM " + DONOR_TABLE_NAME + " WHERE " + DONOR_FIELDS.ID + " = " + donor_id, callback);
    },

    deleteDonorById: function(donor_id, callback){
        DBConnector.query("DELETE FROM " + DONOR_TABLE_NAME + " WHERE " + DONOR_FIELDS.ID + " = " + donor_id, callback);
    },

    insertDonor: function(name, email, mobile, password, callback){
        const time_created = helper.getCurrentMySQLDate();
        DBConnector.query("INSERT INTO " + DONOR_TABLE_NAME + " (" + DONOR_FIELDS.NAME + ", " + DONOR_FIELDS.EMAIL + ", "
         + DONOR_FIELDS.MOBILE + ", " + DONOR_FIELDS.PASSWORD + ", " + DONOR_FIELDS.TIME_CREATED + ") VALUES ('"
         + name + "', '" + email + "', '" + mobile + "', '" + password + "', '" + time_created + "')", callback);
    },

    getDonorEmailById: function(donor_id, callback){
        DBConnector.query("SELECT " + DONOR_FIELDS.EMAIL + " FROM " + DONOR_TABLE_NAME + " WHERE " + DONOR_FIELDS.ID + " = " + donor_id, callback);
    },

    updateDonor: function(donor_id, data, callback){
        delete data[DONOR_FIELDS.ID];
        let updateString = '';
        let updateValsArr = Object.keys(data).map((key) => {
            return key + "='" + data[key] + "'";
        });
        updateString = updateValsArr.join(',');
        DBConnector.query("UPDATE " + DONOR_TABLE_NAME + " SET " + updateValsArr + " WHERE " + DONOR_FIELDS.ID + " = " + donor_id, callback);
    }
};
