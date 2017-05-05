'use strict';

const DONATION_FIELDS = {
    ID: 'id',
    CHILD_ID: 'child_id',
    PURPOSE: 'purpose',
    DATE: 'date_of_donation',
    DONOR_GENDER: 'donor_gender',
    DONOR_DOB: 'donor_date_of_birth',
    DONOR_ADDRESS: 'donor_address',
    DONOR_PROFESSION: 'donor_profession',
    DONOR_NAME: 'donor_name',
    DONOR_EMAIL: 'donor_email',
    DONOR_PAN: 'donor_pancard',
    AMOUNT: 'amount',
    DESCRIPTION: 'description'
};

const CHILD_FIELDS = {
    ID: 'id',
    NAME: 'name',
    DOB: 'date_of_birth',
    ADDITIONAL_INFO: 'additional_info',
    SUPPORTED_DONOR: 'supported_donor',
    TIME_CREATED: 'time_created'
};

const DONOR_FIELDS = {
    ID: 'id',
    NAME: 'name',
    CONTACT: 'contact',
    EMAIL: 'email',
    OCCASSION: 'occasion',
    OCCASSION_DATE: 'occasion_date',
    ADDITIONAL_INFO: 'additional_info',
    SUPPORTED_CHILD: 'supported_child',
    PASSWORD: 'password', //hashed
    TIME_CREATED: 'time_created'
};

const TEMPLATE_FIELDS = {
    ID: 'id',
    NAME: 'template_name',
    SUBJECT: 'subject',
    DESCRIPTION: 'description',
    TIME_CREATED: 'time_created'
};

module.exports = {
    DONOR_FIELDS,
    CHILD_FIELDS,
    DONATION_FIELDS,
    TEMPLATE_FIELDS
};
