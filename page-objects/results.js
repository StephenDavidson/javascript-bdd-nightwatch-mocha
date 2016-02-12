'use strict';
var config = require('../config');
var locators = require('./locators/results.js');

module.exports = {
  url: config.url + '?q=',
  elements: locators
};