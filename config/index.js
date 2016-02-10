'use strict';
var env = process.env.NODE_ENV || 'production';
module.exports = require('./' + env + '.js');