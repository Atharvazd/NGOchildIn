/**
 * Module that will handle our authentication tasks
 */
'use strict';

exports.isAuthenticated = function() {

    return function(req, res, next) {
      if(req.session.user || req.url === '/login') {
        next();
      } else {
        res.redirect('/login');
      }
    }
}
