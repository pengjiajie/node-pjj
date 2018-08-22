'use strict';

var mongoose = require('../db');

var Schema = mongoose.Schema;

var adminSchema = new Schema({
    username: String,
    password: String,
    create_time: String,
    phone: String,
    status: {type: Number, default: 1},
    avatar: {type: String, default: 'default.jpg'},
    city: {type: String, default: '深圳市'}
})

var Admin = mongoose.model('users', adminSchema)

module.exports = Admin