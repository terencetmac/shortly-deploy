var db = require('../../db/mongo.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


var Link = mongoose.model('Link', db.schema.link);

module.exports = Link;