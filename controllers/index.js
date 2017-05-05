'use strict';

const IndexModel = require('../models/index');


module.exports = function(router) {

    let model = new IndexModel();

    router.get('/', function(req, res) {
        res.render('index', model);
    });

    router.get('/donors', function(req, res) {
        res.render('index', {
            url: 'donors',
            donor: [{
                    donor_id: 11,
                    name: 'xxxx',
                    contact: 'xxxx',
                    email: 'xxxx',
                    occasion: 'Birthday',
                    occasion_date: 'xxxx',
                    additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    supported_child: 'xxxx'
                },
                {
                    donor_id: 111,
                    name: 'xxxx',
                    contact: 'xxxx',
                    email: 'xxxx',
                    occasion: 'NIL',
                    occasion_date: 'xxxx',
                    additional_info: 'xxxx',
                    supported_child: 'xxxx'
                },
                {
                    donor_id: 112,
                    name: 'xxxx',
                    contact: 'xxxx',
                    email: 'xxxx',
                    occasion: 'Wedding Anniversary',
                    occasion_date: 'xxxx',
                    additional_info: 'xxxx',
                    supported_child: 'xxxx'
                },
                {
                    donor_id: 121,
                    name: 'xxxx',
                    contact: 'xxxx',
                    email: 'xxxx',
                    occasion: 'Birthday',
                    occasion_date: 'xxxx',
                    additional_info: 'xxxx',
                    supported_child: 'xxxx'
                },
                {
                    name: 'xxxx',
                    contact: 'xxxx',
                    email: 'xxxx',
                    occasion: 'Birthday',
                    occasion_date: 'xxxx',
                    additional_info: 'xxxx',
                    supported_child: 'xxxx'
                },
                {
                    name: 'xxxx',
                    contact: 'xxxx',
                    email: 'xxxx',
                    occasion: 'Birthday',
                    occasion_date: 'xxxx',
                    additional_info: 'xxxx',
                    supported_child: 'xxxx'
                },
                {
                    name: 'xxxx',
                    contact: 'xxxx',
                    email: 'xxxx',
                    occasion: 'Birthday',
                    occasion_date: 'xxxx',
                    additional_info: 'xxxx',
                    supported_child: 'xxxx'
                },
                {
                    name: 'xxxx',
                    contact: 'xxxx',
                    email: 'xxxx',
                    occasion: 'Birthday',
                    occasion_date: 'xxxx',
                    additional_info: 'xxxx',
                    supported_child: 'xxxx'
                }
            ]
        });
    });

    router.get('/child', function(req, res) {
        res.render('index', {
            url: 'child',
            child: [{
                    child_id: 116,
                    name: 'xxxx',
                    dob: 'xxxx',
                    additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    supporter_donor: 'xxxx'
                },
                {
                    child_id: 117,
                    name: 'xxxx',
                    dob: 'xxxx',
                    additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    supporter_donor: 'xxxx'
                },
                {
                    child_id: 118,
                    name: 'xxxx',
                    dob: 'xxxx',
                    additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    supporter_donor: 'xxxx'
                },
                {
                    child_id: 119,
                    name: 'xxxx',
                    dob: 'xxxx',
                    additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    supporter_donor: 'xxxx'
                },
                {
                    child_id: 110,
                    name: 'xxxx',
                    dob: 'xxxx',
                    additional_info: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    supporter_donor: 'xxxx'
                }
            ]
        });
    });

    router.get('/donation', function(req, res) {
        DonationModel.getAllDonations((err, rows) => {
            console.log(rows);
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
            console.log(rows);
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
            console.log(rows);
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
      console.log('hello donation');
        DonationModel.getAllDonations((err, rows) => {
            console.log(rows);
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
            console.log(rows);
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
        console.log('messagesDonor', req.body);
        res.json({}).end()
        //res.render('index', {url : 'messages'});
    });

    router.post('/registerDonor', function(req, res) {
        console.log('registerDonor', req.body);
        res.json({}).end()
        //res.render('index', {url : 'messages'});
    });

    router.post('/updateDonor', function(req, res) {
        console.log('updateDonor', req.body);
        res.json({}).end()
        //res.render('index', {url : 'messages'});
    });

    router.post('/deleteDonor', function(req, res) {
        console.log('deleteDonor', req.body);
        res.json({}).end()
        //res.render('index', {url : 'messages'});
    });

    router.get('/login', function(req, res) {
        res.render('login');
    });
};
