context('Search stubbed', () => {
  const searchList = '.dc-results-list ol';
  // HEADER
  it('When I visit the search page I see a header', () => {
    cy.stubSearchResults('/search');
    cy.findByRole('heading', { name: 'Datasets' });
  });

  // FULLTEXT FILTER
  it.skip('I can use the text input filter', () => {
    cy.stubSearchResults('/search');
    const placholder = 'Type your search term here';
    const filteredFacets = [
      'economy (1)',
      'price (1)',
      'time-series (1)',
      'State Economic Council (1)',
      'City Planning (0)',
      'Finance and Budgeting (1)',
    ]

    // Load default page
    cy.get(searchList).children().its('length').should('eq', 10)
    cy.findByPlaceholderText(placholder).should('exist');
    cy.findByLabelText('Search').should('exist');
    cy.findByText('10 datasets found').should('exist');
    cy.findByLabelText('City Planning (3)').should('exist');

    // Search for "gold" and recheck
    cy.findByPlaceholderText(placholder).type('gold');
    cy.get('.dc-search-results-message').contains('1 dataset found for "gold"');
    cy.findByRole('button', {name: 'Show 9 more'}).click();
    filteredFacets.forEach((facet) => {
      cy.findByLabelText(facet).should('exist');
    })
    cy.get(searchList).children().its('length').should('eq', 1);
  });

  // SORT FILTER
  it('I can use the sort filter', () => {
    cy.stubSearchResults('/search');
    const sortFilter = 'Sort by:';
    cy.findByLabelText('Health Care (3)').should('exist');
    cy.findByLabelText(sortFilter).should('exist');
    cy.findByLabelText(sortFilter).select('title');
    //expand tests for sort
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'Afghanistan Election Districts');
    cy.findByLabelText('Health Care (3)').should('exist');
    cy.findByText('10 datasets found').should('exist');
  });

  // TOPIC FILTER
  it('I can use the topic filter', () => {
    cy.stubSearchResults('/search');
    cy.get('h2.facet-block-theme-inner').should('have.text','Topics')
    cy.get('.inner-theme-facets .show-more-container').children().should('have.length', 5)
    cy.findByText('Finance and Budgeting (3)').should('exist');
    cy.findByText('City Planning (3)').should('exist');
    cy.wait(500)
    cy.findByText('City Planning (3)').click();
    cy.get('.dc-search-results-message').contains('3 datasets found in Topics: City Planning');
    cy.findByText('City Planning (3)').should('exist');
    cy.findByText('Finance and Budgeting (0)').should('exist');
    cy.get(searchList).children().its('length').should('eq', 3);
    cy.wait(500)
    cy.findByText('City Planning (3)').click();
    cy.get('.dc-search-results-message').contains('10 datasets found');
    cy.get(searchList).children().its('length').should('eq', 10);
    cy.findByText('Finance and Budgeting (3)').should('exist');
  });

  // TAG FILTER
  it.skip('I can use the tag filter', () => {
    cy.stubSearchResults('/search');
    cy.get('.dc-search-results-message').contains('10 datasets found');
    cy.get(searchList).children().its('length').should('eq', 10);
    cy.findByRole('heading', {name: 'US National Foreclosure Statistics January 2012'}).should('exist');
    // Click economy
    cy.wait(500)
    cy.findByText('economy (3)').click();
    cy.get('.dc-search-results-message').contains('3 datasets found in Tags: economy');
    cy.get(searchList).children().its('length').should('eq', 3);
    cy.findByText('Finance and Budgeting (3)').should('exist');
    cy.findByRole('heading', {name: 'London Deprivation Index'}).should('exist');
    cy.findByRole('heading', {name: 'US National Foreclosure Statistics January 2012'}).should('exist');
    // Click united kingdom
    cy.wait(500)
    cy.findByText('United Kingdom (1)').click();
    cy.get('.dc-search-results-message').contains('1 dataset found in Tags: economy, United Kingdom');
    cy.get(searchList).children().its('length').should('eq', 1);
    cy.findByText('crime (0)').should('exist');
    cy.findByRole('heading', {name: 'London Deprivation Index'}).should('exist');
    // click economy
    cy.wait(500)
    cy.findByText('economy (1)').click();
    cy.get('.dc-search-results-message').contains('1 dataset found in Tags: United Kingdom');
    cy.get(searchList).children().its('length').should('eq', 1);
    cy.findByText('Finance and Budgeting (1)').should('exist');
    cy.findByRole('heading', {name: 'London Deprivation Index'}).should('exist');
    cy.findAllByText('US National Foreclosure Statistics January 2012').should('not.exist')
  });

  // PUBLISHER FILTER
  it('I can use the publisher filter', () => {
    cy.stubSearchResults('/search');
    cy.get('.dc-search-results-message').contains('10 datasets found');
    cy.get(searchList).children().its('length').should('eq', 10);
    cy.wait(500)
    cy.findByText('National Health Council (3)').click();
    cy.get('.dc-search-results-message').contains('3 datasets found in Publishers: National Health Council');
    cy.get(searchList).children().its('length').should('eq', 3);
  });

  // PAGE SIZE
  it('I can change the amount of results per page', () => {
    cy.stubSearchResults('/search');
    cy.get('.dc-search-results-message').contains('10 datasets found');
    cy.get('.dataset-results-count').contains('1-10 of 10 datasets')
    cy.get(searchList).children().its('length').should('eq', 10);
    cy.findByLabelText('Page Size').select('5')
    cy.wait(500);
    cy.get('.dc-search-results-message').contains('10 datasets found');
    cy.get('.dataset-results-count').contains('1-5 of 10 datasets')
    cy.get(searchList).children().its('length').should('eq', 5);
  });

  // PAGINATION
  it('I can navigate pages when available', () => {
    cy.stubSearchResults('/search');
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'U.S. Tobacco Usage Statistics');
    cy.get('.pagination').children().its('length').should('eq', 1);
    cy.findByLabelText('Page Size').select('5');
    cy.wait(500)
    cy.get('.pagination').children().its('length').should('eq', 4);
    cy.get('.dataset-results-count').contains('1-5 of 10 datasets')
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'U.S. Tobacco Usage Statistics');
    cy.findByRole('link', {name: 'Go to page number 2'}).click();
    cy.get('.dataset-results-count').contains('6-10 of 10 datasets');
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'Afghanistan Election Districts');
    cy.findByRole('link', {name: 'Go to previous page'}).click();
    cy.get('.dataset-results-count').contains('1-5 of 10 datasets');
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'U.S. Tobacco Usage Statistics');
  });

  // URL PARAMS
  it('I can visit the site with params to load data', () => {
    cy.stubSearchResults('/search/?fulltext=gold');
    cy.get('.dc-search-results-message').contains('1 dataset found for "gold"');
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'Gold Prices in London 1950-2008 (Monthly)');
    cy.get(searchList).children().its('length').should('eq', 1);

    // TODO: FIX ready for merge in components
    // cy.stubSearchResults('/search/?page=2&page-size=5');
    // cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
    //   .should('contain', 'U.S. Tobacco Usage Statistics');
    // cy.get('.dataset-results-count').contains('6-10 out of 10 datasets');
  })

 })
