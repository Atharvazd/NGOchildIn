'use strict';

const mysql = require('mysql');
let connection;

module.exports = {
    createConnection: function() {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'childin'
        });

        connection.connect();
    },

    query: function(query, callback) {
        console.log('Query: ', query);
        connection.query(query, function(err, rows, fields) {
            console.log('Query: ', query, 'Err: ', err);
            if (err) return callback(err);
            return callback(null, rows);
        });
    },

    destroyConnection: function() {
        connection.close();
    }

}
