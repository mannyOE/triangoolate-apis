var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
var bcrypt 		= require('bcrypt');
var async 		= require('async');
var uuid 		= require('node-uuid');
var utilities	= require('../utils/utilities');

var UserSchema = new Schema({	
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	timeCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', UserSchema);
