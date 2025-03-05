import '@testing-library/cypress/add-commands';
import searchFacets from '../fixtures/searchFacets.json';
import searchTextFacets from '../fixtures/facets/goldFulltext.json';
import economyKeywordFacets from "../fixtures/facets/economyKeyword.json";
import economyUKKeywordFacets from "../fixtures/facets/economyUkKeyword.json";
import cityPlanningFacets from "../fixtures/facets/cityPlanningTheme.json";
import ukKeywordFacets from "../fixtures/facets/ukKeyword.json";

Cypress.Commands.add('stubDatastoreImportInfo', () => {
  cy.intercept(/.*\/datastore\/imports.*/, 'fx:datastoreImportInfo')
});

Cypress.Commands.add('stubMetadata', () => {
  cy.intercept(/.*\/metastore\/schemas\/dataset\/items\/fb3525f2-d32a-451e-8869-906ed41f7695\?.*/, { fixture: 'datasetMetadata.json' })
});

Cypress.Commands.add('stubDatatable', () => {
  cy.intercept(/.*\/datastore\/query\/1234abcd\?.*35\.08.*/, { fixture: 'dataset/datasetSqlFilteredResults.json'});
  cy.intercept(/.*\/datastore\/query.*offset=0$/, { fixture: 'dataset/datasetSqlResults.json'});

  cy.intercept(/.*\/datastore\/query.*offset=0.*&sorts.*asc$/, { fixture: 'dataset/datasetSqlResults.json'});
  cy.intercept(/.*\/datastore\/query.*offset=0.*&sorts.*desc$/, { fixture: 'dataset/datasetResultsSorted.json'});
});

Cypress.Commands.add('stubSearchResults', (path) => {
  // RESULTS
    // DEFAULT URL
  cy.intercept(/^(?=.*search\?fulltext=&page=1&page-size=10&sort=modified&sort-order=desc&facets=0).*$/, { fixture: 'searchResults.json'});
  cy.intercept(/^(?=.*fulltext=gold)(?=.*facets=0).*$/, { fixture: 'results/goldFulltext.json'});
  cy.intercept(/^(?=.*fulltext=&page=1&page-size=10&sort=title)(?=.*facets=0).*$/, { fixture: 'results/titleSort.json'});
  cy.intercept(/^(?=.*&theme=City%20Planning)(?=.*facets=0).*$/, {fixture: 'results/cityPlanningTheme.json'});
  cy.intercept(/^(?=.*keyword=economy)(?=.*facets=0).*$/, {fixture: 'results/economyKeyword.json'});
  cy.intercept(/^(?=.*keyword=economy,United%20Kingdom)(?=.*facets=0).*$/, { fixture: 'results/economyUkKeyword.json'});
  cy.intercept(/^(?=.*keyword=United%20Kingdom)(?=.*facets=0).*$/, {fixture: 'results/ukKeyword.json'});
  cy.intercept(/^(?=.*publisher__name=Advisory%20Council%20for%20Infectious%20Disease)(?=.*facets=0).*$/, {fixture: 'results/advisoryPublisher.json'}).as('resultsPubslisher');
  cy.intercept(/^(?=.*page-size=5)(?=.*facets=0).*$/, { fixture: 'results/pageSize.json'});
  cy.intercept(/^(?=.*page=2&page-size=5)(?=.*facets=0).*$/, { fixture: 'results/page2.json'});

  // FACETS
  cy.intercept(/^(?=.*search\?fulltext=&page=1&page-size=10&sort=modified&sort-order=desc&facets=theme).*$/, searchFacets.theme);
  cy.intercept(/^(?=.*search\?fulltext=&page=1&page-size=10&sort=modified&sort-order=desc&facets=keyword).*$/, searchFacets.keyword);
  cy.intercept(/^(?=.*search\?fulltext=&page=1&page-size=10&sort=modified&sort-order=desc&facets=publisher__name).*$/, searchFacets.publisher);
  cy.intercept(/^(?=.*fulltext=gold)(?=.*facets=theme).*$/, searchTextFacets.theme);
  cy.intercept(/^(?=.*fulltext=gold)(?=.*facets=keyword).*$/, searchTextFacets.keyword);
  cy.intercept(/^(?=.*fulltext=gold)(?=.*facets=publisher).*$/, searchTextFacets.publisher);
  cy.intercept(/^(?=.*fulltext=&page=1&page-size=10&sort=title)(?=.*facets=theme).*$/, searchFacets.theme);
  cy.intercept(/^(?=.*fulltext=&page=1&page-size=10&sort=title)(?=.*facets=keyword).*$/, searchFacets.keyword);
  cy.intercept(/^(?=.*fulltext=&page=1&page-size=10&sort=title)(?=.*facets=publisher__name).*$/, searchFacets.publisher);
  cy.intercept(/^(?=.*&theme=City%20Planning)(?=.*facets=theme).*$/, cityPlanningFacets.theme);
  cy.intercept(/^(?=.*&theme=City%20Planning)(?=.*facets=keyword).*$/, cityPlanningFacets.keyword);
  cy.intercept(/^(?=.*&theme=City%20Planning)(?=.*facets=publisher).*$/, cityPlanningFacets.publisher);
  cy.intercept('GET', /^(?=.*keyword=economy)(?=.*facets=theme).*$/, economyKeywordFacets.theme);
  cy.intercept('GET', /^(?=.*keyword=economy)(?=.*facets=keyword).*$/, economyKeywordFacets.keyword);
  cy.intercept('GET', /^(?=.*keyword=economy)(?=.*facets=publisher).*$/, economyKeywordFacets.publisher);
  cy.intercept('GET', /^(?=.*keyword=economy,United%20Kingdom)(?=.*facets=theme).*$/, economyUKKeywordFacets.theme);
  cy.intercept('GET', /^(?=.*keyword=economy,United%20Kingdom)(?=.*facets=keyword).*$/, economyUKKeywordFacets.keyword);
  cy.intercept('GET', /^(?=.*keyword=economy,United%20Kingdom)(?=.*facets=publisher).*$/, economyUKKeywordFacets.publisher);
  cy.intercept('GET', /^(?=.*keyword=United%20Kingdom)(?=.*facets=theme).*$/, ukKeywordFacets.theme);
  cy.intercept('GET', /^(?=.*keyword=United%20Kingdom)(?=.*facets=keyword).*$/, ukKeywordFacets.keyword);
  cy.intercept('GET', /^(?=.*keyword=United%20Kingdom)(?=.*facets=publisher).*$/, ukKeywordFacets.publisher);
  cy.intercept('GET', /^(?=.*publisher__name=Advisory%20Council%20for%20Infectious%20Disease)(?=.*facets=.*).*$/, {fixture: 'facets/advisoryPublisher.json'});
  cy.intercept('GET', /^(?=.*page-size=5)(?=.*facets=theme).*$/, searchFacets.theme);
  cy.intercept('GET', /^(?=.*page-size=5)(?=.*facets=keyword).*$/, searchFacets.keyword);
  cy.intercept('GET', /^(?=.*page-size=5)(?=.*facets=publisher__name).*$/, searchFacets.publisher);
  cy.intercept('GET', /^(?=.*page=2&page-size=5)(?=.*facets=theme).*$/, searchFacets.theme);
  cy.intercept('GET', /^(?=.*page=2&page-size=5)(?=.*facets=keyword).*$/, searchFacets.keyword);
  cy.intercept('GET', /^(?=.*page=2&page-size=5)(?=.*facets=publisher).*$/, searchFacets.publisher);

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
