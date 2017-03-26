'use strict';
const DonorModel = require('../../lib/api/models/DonorModel');

function getDonors(req, res) {
    DonorModel
}

module.exports = function (router) {
    router.get('/', getDonors);
}
