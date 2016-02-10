'use strict';
var faker = require('faker');

describe('Duckduckgo', function() {

  describe('Search', function() {

    var homePage;
    var resultsPage;

    before(function(client, done) {
      homePage = client.page.home();
      resultsPage = client.page.results();
      done();
    });

    after(function(client, done) {
      client.end(function() {
        done();
      });
    });

    it('can search text', function(client) {
      homePage.navigate()
        .waitForElementVisible('@body')
        .setValue('@searchField', faker.lorem.sentence())
        .click('@searchButton');

      resultsPage.expect.element('@firstResultTitle').to.be.visible;
    });

    it('can search date', function(client) {
      homePage.navigate()
        .waitForElementVisible('@body')
        .setValue('@searchField', faker.date.future())
        .click('@searchButton');

      resultsPage.expect.element('@firstResultTitle').to.be.visible;
    });

    it('can search numbers', function(client) {
      homePage.navigate()
        .waitForElementVisible('@body')
        .setValue('@searchField', faker.random.number())
        .click('@searchButton');

      resultsPage.expect.element('@firstResultTitle').to.be.visible;
    });

  });
});