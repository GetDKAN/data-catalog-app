import '@testing-library/cypress/add-commands';

Cypress.Commands.add('stubDatastoreImportInfo', () => {
  cy.server();
  cy.route(/.*\/datastore\/imports.*/, 'fx:datastoreImportInfo')
});

Cypress.Commands.add('stubMetadata', () => {
  cy.server();
  cy.route(/.*\/metastore\/schemas\/dataset\/items\/1234-abcd\?.*/, 'fx:datasetMetadata')
});

Cypress.Commands.add('stubDatatable', () => {
  cy.server();
  cy.fixture('datasetSqlCount').then((res) => {
    cy.route(/.*\[SELECT COUNT\(\*\) FROM .*/, res)
    cy.route(/.*\[SELECT COUNT\(\*\) FROM .*price.*/, () => ([{expression: "26"}]))
  })
  cy.fixture('datasetSqlResults').then((res) => {
    cy.route(/.*\[SELECT \* FROM .*LIMIT 20.*/, res.slice(0, 20));
    cy.route(/.*\[SELECT \* FROM .*LIMIT 50.*/, res.slice(0, 50))
    cy.route(/.*\[SELECT \* FROM .*LIMIT 100.*/, res.slice(0, 100))
    cy.route(/.*\[SELECT \* FROM .*price =.*/, res.filter((item) => item.price == '35.08'))
    cy.route(/.*\[SELECT \* FROM .*ORDER BY record_number ASC.*/, res.slice(0, 20))
    cy.route(/.*\[SELECT \* FROM .*ORDER BY record_number DESC.*/, res.reverse().slice(0, 20))
  })
});

Cypress.Commands.add('stubSearchResults', (path) => {
  cy.server();
  // RESULTS
  cy.fixture('searchResults').then((res) => {
    // DEFAULT URL
    cy.route(/^(?=.*search\?fulltext=&page=1&page-size=10&sort=modified&sort_order=desc&facets=0).*$/, res).as('resultsDefault');
    cy.route(/^(?=.*fulltext=gold)(?=.*facets=0).*$/, 'fx:results/goldFulltext.json').as('resultsFulltext');
    cy.route(/^(?=.*fulltext=&page=1&page-size=10&sort=title)(?=.*facets=0).*$/, 'fx:results/titleSort.json').as('resultsSortTitle');
    cy.route(/^(?=.*&theme=City Planning)(?=.*facets=0).*$/, 'fx:results/cityPlanningTheme.json').as('resultsTheme');
    cy.route(/^(?=.*keyword=economy)(?=.*facets=0).*$/, 'fx:results/economyKeyword.json').as('resultsKeywordEconomy');
    cy.route(/^(?=.*keyword=economy,United Kingdom)(?=.*facets=0).*$/, 'fx:results/economyUkKeyword.json').as('resultsKeywordEconomyUK');
    cy.route(/^(?=.*keyword=United Kingdom)(?=.*facets=0).*$/, 'fx:results/ukKeyword.json').as('resultsKeywordUK');
    cy.route(/^(?=.*publisher__name=Advisory Council for Infectious Disease)(?=.*facets=0).*$/, 'fx:results/advisoryPublisher.json').as('resultsPubslisher');
    cy.route(/^(?=.*page-size=5)(?=.*facets=0).*$/, 'fx:results/pageSize.json').as('resultsPageSize');
    cy.route(/^(?=.*page=2&page-size=5)(?=.*facets=0).*$/, 'fx:results/page2.json').as('resultsPage2');
  });

  // FACETS
  cy.fixture('searchFacets').then((res) => {
    // DEFAULT URL
    cy.fixture('searchFacets.json').as('searchFacets')
    cy.route(/^(?=.*search\/facets\?)(?=.*fulltext=&page=1&page-size=10&sort=modified&sort_order=desc).*$/, '@searchFacets').as('facetDefault');
    cy.route(/^(?=.*search\/facets\?)(?=.*fulltext=gold).*$/, 'fx:facets/goldFulltext.json').as('facetFulltext');
    cy.route(/^(?=.*search\/facets\?)(?=.*&sort=title).*$/, '@searchFacets').as('facetSortTitle');
    cy.route(/^(?=.*search\/facets\?)(?=.*theme=City Planning).*$/, 'fx:facets/cityPlanningTheme.json').as('facetTheme');
    cy.route('GET', /^(?=.*search\/facets\?)(?=.*keyword=economy&).*$/, 'fx:facets/economyKeyword.json').as('facetKeywordEconomy');
    cy.route('GET', /^(?=.*search\/facets\?)(?=.*keyword=economy,United Kingdom).*$/, 'fx:facets/economyUkKeyword.json').as('facetKeywordEconomyUK');
    cy.route('GET', /^(?=.*search\/facets\?)(?=.*keyword=United Kingdom).*$/, 'fx:facets/ukKeyword.json').as('facetKeywordUK');
    cy.route('GET', /^(?=.*search\/facets\?)(?=.*publisher__name=Advisory Council for Infectious Disease).*$/, 'fx:facets/advisoryPublisher.json').as('facetPublisher');
    cy.route('GET', /^(?=.*search\/facets\?)(?=.*page-size=5).*$/, '@searchFacets').as('facetPageSize');
    cy.route('GET', /^(?=.*search\/facets\?)(?=.*page=2&page-size=5).*$/, '@searchFacets').as('facetPage2');
  })
  cy.visit(path)
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
