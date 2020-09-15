import '@testing-library/cypress/add-commands';

Cypress.Commands.add('stubMetadata', (path) => {
  cy.server();
  cy.route(`**/metastore/schemas/dataset/items/1234-abcd?**`, 'fx:datasetMetadata')
  cy.visit(path)
});

Cypress.Commands.add('stubDatatable', (path) => {
  cy.server();
  cy.fixture('datasetSqlCount').then((res) => {
    cy.route(/^(?=.*COUNT)(?=.*price)(?=.*3).*$/, () => ([{expression: "26"}]))
    cy.route(/^(?=.*\[SELECT COUNT\(\*\) FROM 1234abcd]&show-db-columns).*$/, res)
    cy.route(/^(?=.*\[SELECT COUNT\(\*\) FROM 1234abcd];&show-db-columns).*$/, res)
  })
  cy.fixture('datasetSqlResults').then((res) => {
    cy.route(/^(?=.*1234abcd)(?=.*LIMIT 20).*$/, res.slice(0, 20));
    cy.route(/^(?=.*1234abcd)(?=.*LIMIT 50).*$/, res.slice(0, 50))
    cy.route(/^(?=.*1234abcd)(?=.*LIMIT 100).*$/, res.slice(0, 100))
    cy.route(/^(?=.*1234abcd)(?=.*35.08)(?=.*LIMIT 20).*$/, res.filter((item) => item.price == '35.08'))
    cy.route(/^(?=.*1234abcd)(?=.*ORDER BY record_number ASC).*$/, res.slice(0, 20))
    cy.route(/^(?=.*1234abcd)(?=.*ORDER BY record_number DESC).*$/, res.reverse().slice(0, 20))
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