import '@testing-library/cypress/add-commands';

Cypress.Commands.add('stubDatastoreImportInfo', () => {
  cy.intercept(/.*\/datastore\/imports.*/, 'fx:datastoreImportInfo')
});

Cypress.Commands.add('stubMetadata', () => {
  cy.intercept(/.*\/metastore\/schemas\/dataset\/items\/1234-abcd\?.*/, { fixture: 'datasetMetadata.json' })
});

Cypress.Commands.add('stubDatatable', () => {
  cy.fixture('datasetSqlCount').then((res) => {
    cy.intercept(/.*\[SELECT%20COUNT\(\*\)%20FROM%20.*/, res)
    cy.intercept(/.*\[SELECT%20COUNT\(\*\)%20FROM%20.*price.*/, () => ([{expression: "26"}]))
  })
  cy.fixture('datasetSqlResults').then((res) => {
    cy.intercept(/.*\/datastore\/query.*/, res)
  })
});

Cypress.Commands.add('stubSearchResults', (path) => {
  // RESULTS
  cy.fixture('searchResults').then((res) => {
    // DEFAULT URL
    cy.intercept(/^(?=.*search\?fulltext=&page=1&page-size=10&sort=modified&sort_order=desc&facets=0).*$/, res).as('resultsDefault');
    cy.intercept(/^(?=.*fulltext=gold)(?=.*facets=0).*$/, { fixture: 'results/goldFulltext.json'}).as('resultsFulltext');
    cy.intercept(/^(?=.*fulltext=&page=1&page-size=10&sort=title)(?=.*facets=0).*$/, { fixture: 'results/titleSort.json'}).as('resultsSortTitle');
    cy.intercept(/^(?=.*&theme=City Planning)(?=.*facets=0).*$/, {fixture: 'results/cityPlanningTheme.json'}).as('resultsTheme');
    cy.intercept(/^(?=.*keyword=economy)(?=.*facets=0).*$/, {fixture: 'results/economyKeyword.json'}).as('resultsKeywordEconomy');
    cy.intercept(/^(?=.*keyword=economy,United Kingdom)(?=.*facets=0).*$/, { fixture: 'results/economyUkKeyword.json'}).as('resultsKeywordEconomyUK');
    cy.intercept(/^(?=.*keyword=United Kingdom)(?=.*facets=0).*$/, {fixture: 'results/ukKeyword.json'}).as('resultsKeywordUK');
    cy.intercept(/^(?=.*publisher__name=Advisory Council for Infectious Disease)(?=.*facets=0).*$/, {fixture: 'results/advisoryPublisher.json'}).as('resultsPubslisher');
    cy.intercept(/^(?=.*page-size=5)(?=.*facets=0).*$/, { fixture: 'results/pageSize.json'}).as('resultsPageSize');
    cy.intercept(/^(?=.*page=2&page-size=5)(?=.*facets=0).*$/, { fixture: 'results/page2.json'}).as('resultsPage2');
  });

  // FACETS
  cy.fixture('searchFacets').then((res) => {
    // DEFAULT URL
    cy.fixture('searchFacets.json').as('searchFacets')
    cy.intercept(/^(?=.*search\/facets\?)(?=.*fulltext=&page=1&page-size=10&sort=modified&sort_order=desc).*$/, '@searchFacets').as('facetDefault');
    cy.intercept(/^(?=.*search\/facets\?)(?=.*fulltext=gold).*$/, {fixture: 'facets/goldFulltext.json'}).as('facetFulltext');
    cy.intercept(/^(?=.*search\/facets\?)(?=.*&sort=title).*$/, '@searchFacets').as('facetSortTitle');
    cy.intercept(/^(?=.*search\/facets\?)(?=.*theme=City Planning).*$/, {fixture: 'facets/cityPlanningTheme.json'}).as('facetTheme');
    cy.intercept('GET', /^(?=.*search\/facets\?)(?=.*keyword=economy&).*$/, {fixture: 'facets/economyKeyword.json'}).as('facetKeywordEconomy');
    cy.intercept('GET', /^(?=.*search\/facets\?)(?=.*keyword=economy,United Kingdom).*$/, {fixture: 'facets/economyUkKeyword.json'}).as('facetKeywordEconomyUK');
    cy.intercept('GET', /^(?=.*search\/facets\?)(?=.*keyword=United Kingdom).*$/, {fixture: 'facets/ukKeyword.json'}).as('facetKeywordUK');
    cy.intercept('GET', /^(?=.*search\/facets\?)(?=.*publisher__name=Advisory Council for Infectious Disease).*$/, {fixture: 'facets/advisoryPublisher.json'}).as('facetPublisher');
    cy.intercept('GET', /^(?=.*search\/facets\?)(?=.*page-size=5).*$/, '@searchFacets').as('facetPageSize');
    cy.intercept('GET', /^(?=.*search\/facets\?)(?=.*page=2&page-size=5).*$/, '@searchFacets').as('facetPage2');
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
