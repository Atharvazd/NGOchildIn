'use strict';

module.exports = {
    isoTimeToMySQLDate: function(date) {
        return date.substring(0, 10);
    },

    getCurrentMySQLDate: function() {
        return isoTimeToMySQLDate(new Date().toISOString());
    }
};
