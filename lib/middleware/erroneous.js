'use strict';

module.exports = {
    internalError: function () {
		return function errors(err, req, res, next) {

			if (!err) {
				next();
			}

			debug('internalError: ', util.inspect(err));
			debug('internalError: ', err.stack);

			if (req.xhr && req.accepts('application/json')) {
				let status = (res.statusCode >= 400) ? res.statusCode : 500;
                let response = {};
				if (deployEnv.isDev()) {
					response.errObject = err;
				}
				res.status(status);
				return res.json(response);
			} else {
				// Set isConsumer role on data model
				req.model = req.model || {};
				req.model.data = req.model.data || {};
				req.model.viewName = 'index';
				res.render(req.model.viewName, req.model);
			}
		};
	}
};
