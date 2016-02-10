var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');

module.exports = {
  src_folders: ['tests'],
  output_folder: 'reports',
  page_objects_path: 'page-objects',
  globals_path: 'globals.js',
  test_runner: 'mocha',
  test_workers: false,

  selenium : {
    start_process : true,
    server_path: seleniumServer.path,
    log_path : '',
    host : '127.0.0.1',
    port : 4444
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: false,
        path: 'screenshots/default'
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium : {
        cli_args : {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    }
  }
};