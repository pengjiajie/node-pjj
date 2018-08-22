'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });

module.exports = mongoose