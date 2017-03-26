'use strict';

const mysql = require('mysql');
const connection;

module.exports = {
    createConnection: function(){
      connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'root',
          database : 'ChildIn'
      });

      connection.connect();
    },

    query: function(query, callback) {
        connection.query(query, function (err, rows, fields) {
            if (err) return callback(err);
            return callback(null, rows);
        });
    },

    destroyConnection: function(){
        connection.close();
    }

}
