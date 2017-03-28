'use strict';
const DBConnector = require('../../lib/dbconnector');
const helper = require('../../lib/helper');

const CHILD_TABLE_NAME = 'Child';
const CHILD_FIELDS = {
    ID: 'child_id',
    NAME: 'name',
    DOB: 'date_of_birth',
    ADDITIONAL_INFO: 'additional_info',
    SUPPORTED_DONOR: 'supported_donor',
    TIME_CREATED: 'time_created'
};

module.exports = {
    CHILD_TABLE_NAME,
    CHILD_FIELDS,
    getAllChildren: function(callback){
        DBConnector.query("SELECT * FROM " + CHILD_TABLE_NAME, callback);
    },

    getChildById: function(child_id, callback){
        DBConnector.query("SELECT * FROM " + CHILD_TABLE_NAME + " WHERE " + CHILD_FIELDS.ID + " = " + child_id, callback);
    },

    deleteChildById: function(child_id, callback){
        DBConnector.query("DELETE FROM " + CHILD_TABLE_NAME + " WHERE " + CHILD_FIELDS.ID + " = " + child_id, callback);
    },

    insertChild: function(name, dob, additional_info, supported_donor){
        const time_created = helper.getCurrentMySQLDate();
        DBConnector.query("INSERT INTO " + CHILD_TABLE_NAME + " (" + CHILD_FIELDS.NAME + ", " + CHILD_FIELDS.DOB + ", "
         + CHILD_FIELDS.ADDITIONAL_INFO + ", " + CHILD_FIELDS.SUPPORTED_DONOR + ", " + CHILD_FIELDS.TIME_CREATED + ") VALUES ('"
         + name + "', '" + gender + "', '" + dob + "', '" + description + "', '" + time_created + "')", callback);
    },

    updateChild: function(child_id, data, callback){
        delete data[CHILD_FIELDS.ID];
        let updateString = '';
        let updateValsArr = Object.keys(data).map((key) => {
            return key + "='" + data[key] + "'";
        });
        updateString = updateValsArr.join(',');
        DBConnector.query("UPDATE " + CHILD_TABLE_NAME + " SET " + updateValsArr + " WHERE " + CHILD_FIELDS.ID + " = " + child_id, callback);
    }
};
