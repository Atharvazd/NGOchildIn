'use strict';

var senderEmail = '';
var senderPwd = '';

var nodemailer = require('nodemailer');
var serviceProvider = {
	gmail: {
		pool: true,
		service: 'gmail',
		auth: {
			user: senderEmail,
			pass: senderPwd
		}
	}
};

var transporter = nodemailer.createTransport(serviceProvider.gmail);

// setup e-mail data with unicode symbols


// var sender = '"Childin" <xxxx@gmail.com>';
// var receivers = ['']; //array
// var subject = 'fsdf';
// var text = 'fsfd';
//
// var mailOptions = {
//     from: sender, // sender address
//     to: receivers, // list of receivers
//     subject: subject, // Subject line
//     text: text // plaintext body
// };


// send mail with defined transport object
var emailservice = function(mailOptions, callback){
  mailOptions.from = senderEmail; // sender address
	console.log('mailOptions', mailOptions);
	transporter.sendMail(mailOptions, callback);
};
module.exports = emailservice;
