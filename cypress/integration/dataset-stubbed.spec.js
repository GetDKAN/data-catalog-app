context('Dataset stubbed', () => {
  beforeEach(() => {
    // cy.visit('/dataset/95f8eac4-fd1f-4b35-8472-5c87e9425dfa')
    cy.stubMetadata();
    cy.stubDatatable();
    cy.stubDatastoreImportInfo();
    cy.visit('/dataset/1234-abcd')
  })

  it('I see the title and description', () => {
    cy.get('h1').should('have.text', 'Asthma Prevalence')
    cy.get('.col-md-9').contains('This table contains the estimated percent of California adults (18 and older)')
  })

  it('I see the file is available to download for each dataset', () => {
    cy.get('.dc-resource:first-of-type > svg', { timeout: 20000 }).should('have.attr', 'class', 'dkan-icon')
    cy.get(`#resource_1234abcd .dc-resource > a`).should('have.attr', 'href', `http://dkan.localtest.me/sites/default/files/distribution/95f8eac4-fd1f-4b35-8472-5c87e9425dfa/asthma-prevalence-adults-by-year-1945-to-1999.csv`);
  })

  // add check to make sure message updates to correct amount of rows
  it('I can filter the each table individually', () => {
    cy.get(`#resource_1234abcd .dc-datatable > .dc-table > :nth-child(2) .tr > :nth-child(3) input`).type('35.08');
    cy.get('.dc-tbody > :nth-child(3) > :nth-child(1)').should('contain', '57')
    cy.get(`#resource_1234abcd .data-table-results`).contains('1 - 20 of 26 rows')
  })

  it('I can sort each table individually', () => {
      cy.get(`#resource_1234abcd .dc-table > :nth-child(1) .tr > :nth-child(1)`).click()
      cy.get(`#resource_1234abcd .dc-table .dc-tbody > :nth-child(1) > :nth-child(1)`).should('contain', '1')
      cy.get(`#resource_1234abcd .dc-table > :nth-child(1) .tr > :nth-child(1)`).click()
      cy.get(`#resource_1234abcd .dc-table .dc-tbody > :nth-child(1) > :nth-child(1)`).should('contain', '200')
      cy.get(`#resource_1234abcd .dc-table > :nth-child(1) .tr > :nth-child(1)`).click()
      cy.get(`#resource_1234abcd .dc-table .dc-tbody > :nth-child(1) > :nth-child(1)`).should('contain', '1')
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
  it.skip('I can select the number of rows per page in each table.', () => {
    cy.get(`#resource_1234abcd .-pageInfo`).should('contain', 'Page 1 of 10')
    cy.get(`#resource_1234abcd .page-size-select`).select('50')
    cy.get(`#resource_1234abcd .-pageInfo`, { timeout: 75000 }).should('contain', 'Page 1 of 4')
    cy.get(`#resource_1234abcd .page-size-select`).select('100')
    cy.get(`#resource_1234abcd .-pageInfo`, { timeout: 75000 }).should('contain', 'Page 1 of 2')
  })

  it('I can change the density of the data table rows', () => {
    cy.get(`#resource_1234abcd .dc-tbody > .dc-tr > :nth-child(1)`, { timeout: 40000 }).should('have.css', 'padding', '5px')
    cy.get(`#resource_1234abcd [title="expanded"]`).click()
    cy.get(`#resource_1234abcd .dc-tbody > .dc-tr > :nth-child(1)`, { timeout: 40000 }).should('have.css', 'padding', '21px 5px')
    cy.get(`#resource_1234abcd [title="normal"]`).click()
    cy.get(`#resource_1234abcd .dc-tbody > .dc-tr > :nth-child(1)`, { timeout: 40000 }).should('have.css', 'padding', '14px 5px')
  })

  it('I can resize the data preview columns without changing the other table.', () => {
    cy.get(`#resource_1234abcd .dc-table > :nth-child(1) .tr > :nth-child(1)`, { timeout: 40000 }).should('have.css', 'flex', '150 0 auto')
    cy.get(`#resource_1234abcd :nth-child(1) > .resizer`)
      .trigger('mousedown', { which: 1 })
    cy.get(`#resource_1234abcd :nth-child(2) > .resizer`)
      .trigger("mousemove")
      .trigger("mouseup")
    cy.get(`#resource_1234abcd .dc-table > :nth-child(1) .tr > :nth-child(1)`, { timeout: 40000 }).should('not.have.css', 'flex', '150 0 auto')
    // Column width is consistent.
    cy.get(`#resource_1234abcd .dc-tbody > .tr > :nth-child(1)`, { timeout: 40000 }).should('not.have.css', 'flex', '150 0 auto')
  })

  it('I can open and close Manage Columns', () => {
    cy.get(`#resource_1234abcd #dc-modal-manage_columns-open`).click()
    // cy.get('#react-aria-modal-dialog #dialog-title').should('contain', 'Display column')
    // Test close button in top right
    cy.get(`#dc-modal-manage_columns-header-close`).click()
    cy.get(`#dc-modal-manage_columns`).should('not.exist');
    // Test Done button
    cy.get(`#resource_1234abcd #dc-modal-manage_columns-open`).click()
    cy.get(`#dc-modal-manage_columns-close`).click()
    cy.get(`#dc-modal-manage_columns`).should('not.exist');
    // Test Esc to close
    cy.get(`#resource_1234abcd #dc-modal-manage_columns-open`).click()
    cy.get(`body`).type('{esc}')
    cy.get(`#dc-modal-manage_columns`).should('not.exist');
  })

  it('I can remove and add back data table columns on just one table', () => {
    cy.get(`#resource_1234abcd .dc-table > :nth-child(1) .tr`, { timeout: 40000 }).children('.th').should('have.length', 3)
    cy.get(`.dc-table > :nth-child(1) .tr .th`).should('contain', 'record_number')
    cy.get(`#resource_1234abcd #dc-modal-manage_columns-open`).click()
    cy.get(`#dc-modal-manage_columns .dc-modal-body > :nth-child(1) label`).should('contain', 'record_number')
    cy.get(`#dc-modal-manage_columns .dc-modal-body > :nth-child(1) label`).click()
    cy.get(`#dc-modal-manage_columns-header-close`).click()
    cy.get(`#resource_1234abcd .dc-table > :nth-child(1) .tr .th`).should('contain', 'date')
    cy.get(`#resource_1234abcd .dc-table > :nth-child(1) .tr`, { timeout: 40000 }).children('.th').should('have.length', 2)
    cy.get(`#resource_1234abcd #dc-modal-manage_columns-open`).click()
    cy.get('#dc-modal-manage_columns .dc-modal-body > :nth-child(1) label').should('contain', 'record_number')
    cy.get('#dc-modal-manage_columns .dc-modal-body > :nth-child(1) label').click()
    cy.get('#dc-modal-manage_columns-header-close').click()
    cy.get(`#resource_1234abcd .dc-table > :nth-child(1) .tr`, { timeout: 40000 }).children('.th').should('have.length', 3)
    cy.get(`#resource_1234abcd .dc-table > :nth-child(1) .tr .th`, { timeout: 40000 }).should('contain', 'record_number')
  })

  it('I can reorder table columns on just one table', () => {
    cy.get(`#resource_1234abcd .dc-table:first-of-type > :nth-child(1) > .tr > :nth-child(1)`, { timeout: 40000 }).should('contain', 'record_number')
    cy.get(`#resource_1234abcd #dc-modal-manage_columns-open`).click()
    cy.get(`#dc-modal-manage_columns .dc-modal-body > :nth-child(2)`)
      .trigger('dragstart')
    cy.get(`#dc-modal-manage_columns .dc-modal-body > :nth-child(1)`)
      .trigger('dragover')
      .trigger('drop')
    cy.get(`#dc-modal-manage_columns-close`).click()
    cy.get(`#resource_1234abcd .dc-table:first-of-type > :nth-child(1) > .tr > :nth-child(1)`, { timeout: 40000 }).should('contain', 'date')
  })

})
