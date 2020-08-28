context('Dataset', () => {
  const dataset_identifier = '95f8eac4-fd1f-4b35-8472-5c87e9425dfa';
  async function getResourceIdentifier() {
    return cy.request(Cypress.config().baseUrl + '/api/1/metastore/schemas/dataset/items/' + dataset_identifier + '?show-reference-ids').then((response) => {
        expect(response.status).eql(200);
        return response.body.distribution[0].identifier;
      });
  }


  beforeEach(() => {
    cy.visit('/dataset/95f8eac4-fd1f-4b35-8472-5c87e9425dfa')
  })

  it('I see the title and description', () => {
    cy.get('h1').should('have.text', 'Asthma Prevalence')
    cy.get('.col-md-9').contains('This table contains the estimated percent of California adults (18 and older) with lifetime and current asthma (asthma prevalence), by year.')
  })

  it('I see the file is available to download for each dataset', () => {
    cy.request(Cypress.config().baseUrl + '/api/1/metastore/schemas/dataset/items/' + dataset_identifier + '?show-reference-ids')
      .then((response) => {
        const tables = [...response.body.distribution];
        cy.request(Cypress.config().baseUrl + '/api/1/datastore/imports/' + tables[0].identifier).then(() => {
          cy.get('.dc-resource:first-of-type > svg', { timeout: 10000 }).should('have.attr', 'class', 'dkan-icon')
          cy.get(`#resource_${tables[0].identifier} .dc-resource > a`, { timeout: 10000 }).should('have.attr', 'href', `${Cypress.config().baseUrl}/sites/default/files/distribution/95f8eac4-fd1f-4b35-8472-5c87e9425dfa/asthma-prevalence-adults-by-year-1945-to-1999.csv`);
          cy.get(`#resource_${tables[1].identifier} .dc-resource > a`, { timeout: 10000 }).should('have.attr', 'href', `${Cypress.config().baseUrl}/sites/default/files/distribution/95f8eac4-fd1f-4b35-8472-5c87e9425dfa/asthma-prevalence-adults-by-year-2000-to-2020.csv`);
        });
      })
  })

  // add check to make sure message updates to correct amount of rows
  it('I can filter the each table individually', () => {
    cy.request(Cypress.config().baseUrl + '/api/1/metastore/schemas/dataset/items/' + dataset_identifier + '?show-reference-ids')
      .then((response) => {
        const tables = [...response.body.distribution];
        cy.request(Cypress.config().baseUrl + '/api/1/datastore/imports/' + tables[0].identifier).then(() => {
          cy.get(`#resource_${tables[0].identifier} .dc-datatable > .dc-table > :nth-child(2) .tr > :nth-child(2) input`, { timeout: 10000 }).type('1985')
          cy.get(`#resource_${tables[1].identifier} .dc-datatable > .dc-table > :nth-child(2) .tr > :nth-child(2) input`, { timeout: 10000 }).type('2014')
          cy.get(`#resource_${tables[0].identifier} .dc-table .dc-tbody > :nth-child(1) > :nth-child(3)`, { timeout: 20000 }).should('contain', '9')
          cy.get(`#resource_${tables[0].identifier} .data-table-results`, { timeout: 20000 }).contains('1 - 1 of 1 rows')
          cy.get(`#resource_${tables[1].identifier} .dc-table .dc-tbody > :nth-child(1) > :nth-child(3)`, { timeout: 20000 }).should('contain', '13.4')
          cy.get(`#resource_${tables[1].identifier} .data-table-results`, { timeout: 20000 }).contains('1 - 2 of 2 rows')
        });
      })
  })

  it('I can sort each table individually', () => {
    cy.request(Cypress.config().baseUrl + '/api/1/metastore/schemas/dataset/items/' + dataset_identifier + '?show-reference-ids')
      .then((response) => {
        const tables = [...response.body.distribution];
        cy.request(Cypress.config().baseUrl + '/api/1/datastore/imports/' + tables[0].identifier).then(() => {
          cy.get(`#resource_${tables[0].identifier} .dc-table > :nth-child(1) .tr > :nth-child(2)`, { timeout: 10000 }).click()
          cy.get(`#resource_${tables[0].identifier} .dc-table .dc-tbody > :nth-child(1) > :nth-child(2)`, { timeout: 20000 }).should('contain', '1945')
          cy.get(`#resource_${tables[1].identifier} .dc-table > :nth-child(1) .tr > :nth-child(2)`, { timeout: 10000 }).click()
          cy.get(`#resource_${tables[1].identifier} .dc-table > :nth-child(1) .tr > :nth-child(2)`, { timeout: 10000 }).click()
          cy.get(`#resource_${tables[1].identifier} .dc-table .dc-tbody > :nth-child(2) > :nth-child(2)`, { timeout: 20000 }).should('contain', '2019')
        });
      })
  })

  it('I see the tags.', () => {
    cy.get('.dc-tag-wrapper > :nth-child(2) > a').contains("health");
    cy.get('.dc-tag-wrapper > :nth-child(3) > a').contains("asthma");
  })

  it('I see the release and update date, identifier, and contact information.', () => {
    var keys = [
      "Publisher",
      "Identifier",
      "Issued",
      "Last Update",
      "License",
      "Contact",
      "Contact E-mail",
      "Public Access Level"
    ]

    var values = [
      'National Health Council',
      '95f8eac4-fd1f-4b35-8472-5c87e9425dfa',
      '2017-08-01',
      '2019-06-06',
      "http://opendefinition.org/licenses/odc-odbl/",
      'Jane Doe',
      'mailto:data.admin@example.com',
      'public'
    ]

    keys.forEach((value, index) => {
      var final = index + 1;
      cy.get('.metadata > .table > tbody > :nth-child(' + final + ') > :nth-child(1)').contains(value);
      cy.get('.metadata > .table > tbody > :nth-child(' + final + ') > :nth-child(2)').contains(values[index]);
    })
  })

  // Add check to make sure message updates correctly
  it('I can select the number of rows per page in each table.', () => {
    cy.request(Cypress.config().baseUrl + '/api/1/metastore/schemas/dataset/items/' + dataset_identifier + '?show-reference-ids')
      .then((response) => {
        const tables = [...response.body.distribution];
        cy.wait(3000)
        cy.request(Cypress.config().baseUrl + '/api/1/datastore/imports/' + tables[0].identifier).then(() => {
          cy.get(`#resource_${tables[0].identifier} .-pageInfo`, { timeout: 20000 }).should('contain', 'Page 1 of 3')
          cy.get(`#resource_${tables[0].identifier} .page-size-select`).select('50')
          cy.get(`#resource_${tables[0].identifier} .-pageInfo`, { timeout: 20000 }).should('contain', 'Page 1 of 2')
          cy.get(`#resource_${tables[0].identifier} .page-size-select`).select('100')
          cy.get(`#resource_${tables[0].identifier} .-pageInfo`, { timeout: 20000 }).should('contain', 'Page 1 of 1')

          cy.get(`#resource_${tables[1].identifier} .-pageInfo`, { timeout: 20000 }).should('contain', 'Page 1 of 2')
          cy.get(`#resource_${tables[1].identifier} .page-size-select`).select('50')
          cy.get(`#resource_${tables[1].identifier} .-pageInfo`, { timeout: 20000 }).should('contain', 'Page 1 of 1')
          cy.get(`#resource_${tables[1].identifier} .page-size-select`).select('100')
          cy.get(`#resource_${tables[1].identifier} .-pageInfo`, { timeout: 20000 }).should('contain', 'Page 1 of 1')
        });
      })
  })

  it('I can change the density of the data table rows', () => {
    cy.request(Cypress.config().baseUrl + '/api/1/metastore/schemas/dataset/items/' + dataset_identifier + '?show-reference-ids')
      .then((response) => {
        const tables = [...response.body.distribution];
        cy.request(Cypress.config().baseUrl + '/api/1/datastore/imports/' + tables[0].identifier).then(() => {
          cy.get(`#resource_${tables[0].identifier} .dc-tbody > .dc-tr > :nth-child(1)`, { timeout: 10000 }).should('have.css', 'padding', '5px')
          cy.get(`#resource_${tables[0].identifier} [title="expanded"]`).click()
          cy.get(`#resource_${tables[0].identifier} .dc-tbody > .dc-tr > :nth-child(1)`, { timeout: 10000 }).should('have.css', 'padding', '21px 5px')
          cy.get(`#resource_${tables[0].identifier} [title="normal"]`).click()
          cy.get(`#resource_${tables[0].identifier} .dc-tbody > .dc-tr > :nth-child(1)`, { timeout: 10000 }).should('have.css', 'padding', '14px 5px')

          cy.get(`#resource_${tables[1].identifier} .dc-tbody > .dc-tr > :nth-child(1)`, { timeout: 10000 }).should('have.css', 'padding', '5px')
          cy.get(`#resource_${tables[1].identifier} [title="expanded"]`).click()
          cy.get(`#resource_${tables[1].identifier} .dc-tbody > .dc-tr > :nth-child(1)`, { timeout: 10000 }).should('have.css', 'padding', '21px 5px')
          cy.get(`#resource_${tables[1].identifier} [title="normal"]`).click()
          cy.get(`#resource_${tables[1].identifier} .dc-tbody > .dc-tr > :nth-child(1)`, { timeout: 10000 }).should('have.css', 'padding', '14px 5px')
        });
      })
  })

  it('I can resize the data preview columns without changing the other table.', () => {
    cy.request(Cypress.config().baseUrl + '/api/1/metastore/schemas/dataset/items/' + dataset_identifier + '?show-reference-ids')
      .then((response) => {
        const tables = [...response.body.distribution];
        cy.request(Cypress.config().baseUrl + '/api/1/datastore/imports/' + tables[0].identifier).then(() => {
          cy.get(`#resource_${tables[0].identifier} .dc-table > :nth-child(1) .tr > :nth-child(1)`, { timeout: 10000 }).should('have.css', 'flex', '150 0 auto')
          cy.get(`#resource_${tables[0].identifier} :nth-child(1) > .resizer`)
            .trigger('mousedown', { which: 1 })
          cy.get(`#resource_${tables[0].identifier} :nth-child(2) > .resizer`)
            .trigger("mousemove")
            .trigger("mouseup")
          cy.get(`#resource_${tables[0].identifier} .dc-table > :nth-child(1) .tr > :nth-child(1)`, { timeout: 10000 }).should('not.have.css', 'flex', '150 0 auto')
          // Column width is consistent.
          cy.get(`#resource_${tables[0].identifier} .dc-tbody > .tr > :nth-child(1)`, { timeout: 10000 }).should('not.have.css', 'flex', '150 0 auto')
          cy.get(`#resource_${tables[1].identifier} .dc-tbody > .tr > :nth-child(1)`, { timeout: 10000 }).should('have.css', 'flex', '150 0 auto')
        });
      })
  })

  it('I can open and close Manage Columns', () => {
    cy.request(Cypress.config().baseUrl + '/api/1/metastore/schemas/dataset/items/' + dataset_identifier + '?show-reference-ids')
      .then((response) => {
        const tables = [...response.body.distribution];
        cy.request(Cypress.config().baseUrl + '/api/1/datastore/imports/' + tables[0].identifier).then(() => {
          cy.get(`#resource_${tables[1].identifier} #dc-modal-manage_columns-open`).click()
          // cy.get('#react-aria-modal-dialog #dialog-title').should('contain', 'Display column')
          // Test close button in top right
          cy.get(`#dc-modal-manage_columns-header-close`).click()
          cy.get(`#dc-modal-manage_columns`, { timeout: 10000 }).should('not.exist');
          // Test Done button
          cy.get(`#resource_${tables[0].identifier} #dc-modal-manage_columns-open`).click()
          cy.get(`#dc-modal-manage_columns-close`).click()
          cy.get(`#dc-modal-manage_columns`, { timeout: 10000 }).should('not.exist');
          // Test Esc to close
          cy.get(`#resource_${tables[1].identifier} #dc-modal-manage_columns-open`).click()
          cy.get(`body`).type('{esc}', { timeout: 10000 })
          cy.get(`#dc-modal-manage_columns`).should('not.exist');
        });
      })
  })

  it('I can remove and add back data table columns on just one table', () => {
    cy.request(Cypress.config().baseUrl + '/api/1/metastore/schemas/dataset/items/' + dataset_identifier + '?show-reference-ids')
      .then((response) => {
        const tables = [...response.body.distribution];
        cy.request(Cypress.config().baseUrl + '/api/1/datastore/imports/' + tables[0].identifier).then(() => {
          cy.get(`#resource_${tables[0].identifier} .dc-table > :nth-child(1) .tr`, { timeout: 10000 }).children('.th').should('have.length', 6)
          cy.get(`#resource_${tables[1].identifier} .dc-table > :nth-child(1) .tr`, { timeout: 10000 }).children('.th').should('have.length', 6)
          cy.get(`.dc-table > :nth-child(1) .tr .th`, { timeout: 10000 }).should('contain', 'record_number')
          cy.get(`#resource_${tables[0].identifier} #dc-modal-manage_columns-open`).click()
          cy.get(`#dc-modal-manage_columns .dc-modal-body > :nth-child(1) label`, { timeout: 10000 }).should('contain', 'record_number')
          cy.get(`#dc-modal-manage_columns .dc-modal-body > :nth-child(1) label`).click()
          cy.get(`#dc-modal-manage_columns-header-close`).click()
          cy.get(`#resource_${tables[0].identifier} .dc-table > :nth-child(1) .tr .th`, { timeout: 10000 }).should('contain', 'year')
          cy.get(`#resource_${tables[0].identifier} .dc-table > :nth-child(1) .tr`, { timeout: 10000 }).children('.th').should('have.length', 5)
          cy.get(`#resource_${tables[1].identifier} .dc-table > :nth-child(1) .tr`, { timeout: 10000 }).children('.th').should('have.length', 6)
          cy.get(`#resource_${tables[0].identifier} #dc-modal-manage_columns-open`).click()
          cy.get('#dc-modal-manage_columns .dc-modal-body > :nth-child(1) label', { timeout: 10000 }).should('contain', 'record_number')
          cy.get('#dc-modal-manage_columns .dc-modal-body > :nth-child(1) label').click()
          cy.get('#dc-modal-manage_columns-header-close').click()
          cy.get(`#resource_${tables[0].identifier} .dc-table > :nth-child(1) .tr`, { timeout: 10000 }).children('.th').should('have.length', 6)
          cy.get(`#resource_${tables[1].identifier} .dc-table > :nth-child(1) .tr`, { timeout: 10000 }).children('.th').should('have.length', 6)
          cy.get(`#resource_${tables[0].identifier} .dc-table > :nth-child(1) .tr .th`, { timeout: 10000 }).should('contain', 'record_number')
        });
      })
  })

  it('I can reorder table columns on just one table', () => {
    cy.request(Cypress.config().baseUrl + '/api/1/metastore/schemas/dataset/items/' + dataset_identifier + '?show-reference-ids')
      .then((response) => {
        const tables = [...response.body.distribution];
        cy.request(Cypress.config().baseUrl + '/api/1/datastore/imports/' + tables[0].identifier).then(() => {
          cy.get(`#resource_${tables[1].identifier} .dc-table:first-of-type > :nth-child(1) > .tr > :nth-child(1)`, { timeout: 10000 }).should('contain', 'record_number')
          cy.get(`#resource_${tables[0].identifier} .dc-table:first-of-type > :nth-child(1) > .tr > :nth-child(1)`, { timeout: 10000 }).should('contain', 'record_number')
          cy.get(`#resource_${tables[1].identifier} #dc-modal-manage_columns-open`).click()
          cy.get(`#dc-modal-manage_columns .dc-modal-body > :nth-child(2)`)
            .trigger('dragstart')
          cy.get(`#dc-modal-manage_columns .dc-modal-body > :nth-child(1)`)
            .trigger('dragover')
            .trigger('drop')
          cy.get(`#dc-modal-manage_columns-close`).click()
          cy.get(`#resource_${tables[0].identifier} .dc-table:first-of-type > :nth-child(1) > .tr > :nth-child(1)`, { timeout: 10000 }).should('contain', 'record_number')
          cy.get(`#resource_${tables[1].identifier} .dc-table:first-of-type > :nth-child(1) .tr > :nth-child(1)`, { timeout: 10000 }).should('contain', 'year')
        });
      })
  })

  it('I don\'t see a datatable if a distribution doesn\'t contain a csv file.', () => {
    cy.visit(`dataset/fb3525f2-d32a-451e-8869-906ed41f7695`)
    cy.wait(6000)
    cy.get(`.dc-datatable`).should('not.exist');
  })
})
