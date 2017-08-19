'use strict';

const IndexModel = require('../models/index');
const DonationModel = require('../models/api/DonationModel');
const DonorModel = require('../models/api/DonorModel');
const ChildModel = require('../models/api/ChildModel');

module.exports = function(router) {

    let model = new IndexModel();

    router.get('/', function(req, res) {
        res.render('index', model);
    });

    router.get('/donors', function(req, res) {
        DonorModel.getAllDonors(function(err, rows) {
            var donors = rows.map(row => {
                return {
                    donor_id: row.id,
                    name: row.name,
                    contact: row.mobile,
                    email: row.email,
                    occasion: '',
                    occasion_date: '',
                    additional_info: row.description,
                    supported_child: ''
                };
            });
            res.render('index', {
                url: 'donors',
                donor: donors
            });
        });
    });

    router.get('/child', function(req, res) {
        ChildModel.getAllChildren(function(err, rows) {
            var children = rows.map(row => {
                return {
                    child_id: row.id,
                    name: row.name,
                    dob: row.date_of_birth,
                    additional_info: row.description,
                    supporter_donor: ''
                };
            });
            res.render('index', {
                url: 'child',
                child: children
            });
        });
    });

    router.get('/donation', function(req, res) {
        DonationModel.getAllDonations((err, rows) => {
            var donationData = rows.map((donation) => {
                return {
                    id: donation.id,
                    child_id: donation.child_id,
                    contact: donation.purpose,
                    email: donation.date_of_donation,
                    occasion: donation.donor_gender,
                    occasion_date: donation.donor_address,
                    additional_info: donation.donor_profession,
                    additional_info: donation.donor_name,
                    additional_info: donation.donor_email,
                    additional_info: donation.donor_pancard,
                    additional_info: donation.mobile,
                    additional_info: donation.amount,
                    additional_info: donation.description,
                }
            });
            var model = {
                url: 'donation',
                donor: donationData
            }
            res.render('index', model);
        });
    });

    router.get('/donation/donor/:donor_id', function(req, res) {
        DonationModel.getDonationsByDonorId(donor_id, (err, rows) => {
            var donationData = rows.map((donation) => {
                return {
                    id: donation.id,
                    child_id: donation.child_id,
                    contact: donation.purpose,
                    email: donation.date_of_donation,
                    occasion: donation.donor_gender,
                    occasion_date: donation.donor_address,
                    additional_info: donation.donor_profession,
                    additional_info: donation.donor_name,
                    additional_info: donation.donor_email,
                    additional_info: donation.donor_pancard,
                    additional_info: donation.mobile,
                    additional_info: donation.amount,
                    additional_info: donation.description,
                }
            });
            var model = {
                url: 'donationByDonorId',
                donor: donationData
            }
            res.render('index', model);
        });
    });

    router.get('/donation/child/:child_id', function(req, res) {
        DonationModel.getDonationsByChildId(child_id, (err, rows) => {
            var donationData = rows.map((donation) => {
                return {
                    id: donation.id,
                    child_id: donation.child_id,
                    contact: donation.purpose,
                    email: donation.date_of_donation,
                    occasion: donation.donor_gender,
                    occasion_date: donation.donor_address,
                    additional_info: donation.donor_profession,
                    additional_info: donation.donor_name,
                    additional_info: donation.donor_email,
                    additional_info: donation.donor_pancard,
                    additional_info: donation.mobile,
                    additional_info: donation.amount,
                    additional_info: donation.description,
                }
            });
            var model = {
                url: 'donationByChildId',
                donor: donationData
            }
            res.render('index', model);
        });
    });

    router.get('/donation', function(req, res) {
        DonationModel.getAllDonations((err, rows) => {
            var donationData = rows.map((donation) => {
                return {
                    id: donation.id,
                    child_id: donation.child_id,
                    purpose: donation.purpose,
                    dob: donation.date_of_donation,
                    gender: donation.donor_gender,
                    address: donation.donor_address,
                    profession: donation.donor_profession,
                    name: donation.donor_name,
                    email: donation.donor_email,
                    pan: donation.donor_pancard,
                    contact: donation.mobile,
                    amount: donation.amount,
                    description: donation.description,
                }
            });
            var model = {
                url: 'donationByDonationId',
                donor: donationData
            }
            res.render('index', model);
        });
    });

    router.get('/donation/:donation_id', function(req, res) {
        DonationModel.getDonationsByDonorId(donation_id, (err, rows) => {
            var donationData = rows.map((donation) => {
                return {
                    id: donation.id,
                    supported_child: donation.child_id,
                    contact: donation.purpose,
                    email: donation.date_of_donation,
                    occasion: donation.donor_gender,
                    occasion_date: donation.donor_address,
                    additional_info: donation.donor_profession,
                    additional_info: donation.donor_name,
                    additional_info: donation.donor_email,
                    additional_info: donation.donor_pancard,
                    additional_info: donation.mobile,
                    additional_info: donation.amount,
                    additional_info: donation.description,
                }
            });
            var model = {
                url: 'donationByDonationId',
                donor: donationData
            }
            res.render('index', model);
        });
    });

    router.post('/messagesDonor', function(req, res) {
        res.json({}).end()
        //res.render('index', {url : 'messages'});
    });

    router.post('/registerDonor', function(req, res) {
        DonorModel.insertDonor(req.body.name, req.body.contact, req.body.email, req.body.additional_info, '', function(err, rows) {
            res.json({err, rows}).end();
        });
    });

    router.post('/registerChild', function(req, res) {
        ChildModel.insertChild(req.body.name, req.body.dob, '', req.body.additional_info, function(err, rows) {
            res.json({err, rows}).end();
        });
    });

    router.post('/updateDonor', function(req, res) {
        res.json({}).end();
        //res.render('index', {url : 'messages'});
    });

    router.post('/deleteDonor', function(req, res) {
        res.json({}).end();
        //res.render('index', {url : 'messages'});
    });

    router.get('/login', function(req, res) {
        res.render('login');
    });
};
