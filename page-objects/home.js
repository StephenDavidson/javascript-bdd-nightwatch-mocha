'use strict';
var config = require('../config');
var locators = require('./locators/home.js');

module.exports = {
  url: config.url,
  elements: locators
};