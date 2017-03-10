var db = require('../../db/mongo.js');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var User = mongoose.model('User', db.schema.user);

module.exports = User;