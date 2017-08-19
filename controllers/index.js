'use strict';

const IndexModel = require('../models/index');
const DonationModel = require('../models/api/DonationModel');
const DonorModel = require('../models/api/DonorModel');
const ChildModel = require('../models/api/ChildModel');
const CHILDIN_ADMIN_USER = 'child_in';
const CHILDIN_ADMIN_PASSWORD = 'child_in';

function isoDateToMMDDYYYY(isoDate) {
    var date = new Date(isoDate);
    return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
}

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
                    additional_info: row.description
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
                    dob: isoDateToMMDDYYYY(row.date_of_birth),
                    additional_info: row.description,
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
            ChildModel.getAllChildren((err, child_rows) =>{
                var childList = child_rows.map(child => {
                    return {
                        id: child.id,
                        name: child.name
                    };
                });

                var donationData = rows.map((donation) => {
                    return {
                        donation_id: donation.id,
                        child_id: donation.child_id,
                        supported_child: donation.supported_child,
                        purpose: donation.purpose,
                        donation_date: isoDateToMMDDYYYY(donation.date_of_donation),
                        gender: donation.donor_gender,
                        dob: isoDateToMMDDYYYY(donation.donor_date_of_birth),
                        address: donation.donor_address,
                        profession: donation.donor_profession,
                        name: donation.donor_name,
                        email: donation.donor_email,
                        pan: donation.donor_pancard,
                        mobile: donation.mobile,
                        amount: donation.amount,
                        description: donation.description
                    }
                });
                var model = {
                    url: 'donation',
                    donation: donationData,
                    childList: childList
                };

                res.render('index', model);
            });
        });
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

    router.post('/registerDonation', function(req, res) {
        DonationModel.insertDonation(Number(req.body.supported_child), req.body.purpose, req.body.donation_date, req.body.gender, req.body.dob, req.body.address, req.body.profession, req.body.name, req.body.email, req.body.pan, req.body.contact, Number(req.body.amount), req.body.additional_info, function(err, rows) {
            res.json({err, rows}).end();
        });
    });

    router.post('/delete_donor', function(req, res) {
        DonorModel.deleteDonorById(req.body.id, function(err, rows) {
            res.json({err, rows}).end();
        });
    });

    router.post('/delete_child', function(req, res) {
        ChildModel.deleteChildById(req.body.id, function(err, rows) {
            res.json({err, rows}).end();
        });
    });

    router.post('/delete_donation', function(req, res) {
        DonationModel.deleteDonationById(req.body.id, function(err, rows) {
            res.json({err, rows}).end();
        });
    });

    router.get('/login', function(req, res) {
        res.render('login');
    });

    router.post('/login', function(req, res) {
        if(req.body.username === CHILDIN_ADMIN_USER && req.body.password === CHILDIN_ADMIN_PASSWORD || req.session.user) {
          req.session.user = req.body.username;
          res.redirect('/');
        } else {
          res.redirect('/login');
        }

    });

    router.get('/logout', function(req, res) {
        req.session.user = null;
        res.redirect('/login');
    });

    // All items below this are PostMVP

    // router.post('/updateDonor', function(req, res) {
    //     res.json({}).end();
    //     //res.render('index', {url : 'messages'});
    // });
    //
    // router.get('/donation/donor/:donor_id', function(req, res) {
    //     DonationModel.getDonationsByDonorId(donor_id, (err, rows) => {
    //         var donationData = rows.map((donation) => {
    //             return {
    //                 id: donation.id,
    //                 child_id: donation.child_id,
    //                 contact: donation.purpose,
    //                 email: donation.date_of_donation,
    //                 occasion: donation.donor_gender,
    //                 occasion_date: donation.donor_address,
    //                 additional_info: donation.donor_profession,
    //                 additional_info: donation.donor_name,
    //                 additional_info: donation.donor_email,
    //                 additional_info: donation.donor_pancard,
    //                 additional_info: donation.mobile,
    //                 additional_info: donation.amount,
    //                 additional_info: donation.description,
    //             }
    //         });
    //         var model = {
    //             url: 'donationByDonorId',
    //             donor: donationData
    //         }
    //         res.render('index', model);
    //     });
    // });
    //
    // router.get('/donation/child/:child_id', function(req, res) {
    //     DonationModel.getDonationsByChildId(child_id, (err, rows) => {
    //         var donationData = rows.map((donation) => {
    //             return {
    //                 id: donation.id,
    //                 child_id: donation.child_id,
    //                 contact: donation.purpose,
    //                 email: donation.date_of_donation,
    //                 occasion: donation.donor_gender,
    //                 occasion_date: donation.donor_address,
    //                 additional_info: donation.donor_profession,
    //                 additional_info: donation.donor_name,
    //                 additional_info: donation.donor_email,
    //                 additional_info: donation.donor_pancard,
    //                 additional_info: donation.mobile,
    //                 additional_info: donation.amount,
    //                 additional_info: donation.description,
    //             }
    //         });
    //         var model = {
    //             url: 'donationByChildId',
    //             donor: donationData
    //         }
    //         res.render('index', model);
    //     });
    // });
    //
    // router.get('/donation/:donation_id', function(req, res) {
    //     DonationModel.getDonationsByDonorId(donation_id, (err, rows) => {
    //         var donationData = rows.map((donation) => {
    //             return {
    //                 id: donation.id,
    //                 supported_child: donation.child_id,
    //                 contact: donation.purpose,
    //                 email: donation.date_of_donation,
    //                 occasion: donation.donor_gender,
    //                 occasion_date: donation.donor_address,
    //                 additional_info: donation.donor_profession,
    //                 additional_info: donation.donor_name,
    //                 additional_info: donation.donor_email,
    //                 additional_info: donation.donor_pancard,
    //                 additional_info: donation.mobile,
    //                 additional_info: donation.amount,
    //                 additional_info: donation.description,
    //             }
    //         });
    //         var model = {
    //             url: 'donationByDonationId',
    //             donor: donationData
    //         }
    //         res.render('index', model);
    //     });
    // });
    //
    // router.post('/messagesDonor', function(req, res) {
    //     res.json({}).end()
    //     //res.render('index', {url : 'messages'});
    // });


};
