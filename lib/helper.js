'use strict';

module.exports = {
    isoTimeToMySQLDate: function(date) {
        return date.substring(0, 10);
    },

    getCurrentMySQLDate: function() {
        return this.isoTimeToMySQLDate(new Date().toISOString());
    }
};
