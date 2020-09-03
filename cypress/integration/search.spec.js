context('Search', () => {

  beforeEach(() => {
    cy.visit("/search")
    cy.wait(3000)
  })

  // HEADER
  it('When I visit the search page I see a header', () => {
    cy.findByRole('heading', { name: 'Datasets' });
  });

  // FULLTEXT FILTER
  it('I can use the text input filter', () => {
    cy.findByPlaceholderText('Type your search term here')
    cy.findByLabelText('Search')
    cy.findByText('10 datasets found')
    //expand tests for using text input
  });

  // PAGINATION
  it('I can navigate pages when available', () => {
    cy.findByLabelText('Sort by:').as("sortFilter")
    cy.get("@sortFilter").select('modified')
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2', { timeout: 20000 })
      .should('contain', 'U.S. Tobacco Usage Statistics')
  });

  //Search Page Text Input Filter
  it('When I enter text into the search input field on the search page, I should see the number of datasets that match.', () => {
    cy.get('#inputSearch').type('election')
    cy.get('.dc-search-results-message > p', { timeout: 10000 }).should('contain', 'datasets found for "election"')
    // Pluck the number from the results summary message.
    cy.get('.dc-search-results-message').as('count')
    cy.get('@count').invoke('text')
      .then((count) => {
        count = parseInt(count.substr(0, 5));
        cy.log('message', count)
        // The summary number should equal the datasets returned.
        cy.get('.dc-results-list ol').children().its('length').should('eq', count)
      })
    // Results list.
    cy.get('.dc-results-list ol').children().each(function ($el, i) {
      let index = i + 1;
      if (index < 3) {
        // Each result has a heading.
        cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(' + index + ')').find('h2')
        // Each result has file formats.
        cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(' + index + ') .format-types').then((element) => {
          assert.isNotNull(element.text())
        })
      }
    })
  })

  // SORTING
  it('Sort results alphabetically', () => {
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'U.S. Tobacco Usage Statistics')
    cy.findByLabelText('Sort by:').as("sortFilter")
    cy.get("@sortFilter").select('title')
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'Afghanistan Election Districts')
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(2) h2')
      .should('contain', 'Asthma Prevalence')
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(3) h2')
      .should('contain', 'Crime Data for the Ten Most Populous Cities in the U.S.')
  })

  // TOPIC FILTER
  it('The topics facet block should contain 5 topics and one legend', () => {
    cy.get('h2.facet-block-theme-inner').should('have.text', 'Topics')
    cy.get('.inner-theme-facets .show-more-container').children().should('have.length', 5)
  })

  it('The topic terms should match the expected POD themes', () => {
    cy.get('.inner-theme-facets .show-more-container').children().then(($li) => {
      cy.fixture('topics.json').then((topics) => {
        Cypress._.each(topics, (category) => {
          expect($li).to.contain(category)
        })
      })
    })
  })

  it('I get the results I expect when using the topic filter', () => {
    cy.findByLabelText('Sort by:').as("sortFilter")
    cy.get("@sortFilter").select('title')
    cy.get('.inner-theme-facets > .show-more-wrapper > .show-more-container > :nth-child(1) > label', { timeout: 20000 }).click()
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2', { timeout: 50000 })
      .should('contain', 'Florida Bike Lanes')
    cy.get('.dc-search-results-message').should('contain', '1 dataset found in Topics')
  });

  // KEYWORD FILTER
  it('Check that the keyword facet block has options', () => {
    cy.get('.inner-keyword-facets > .show-more-wrapper > .show-more-container').children()
      .its('length')
      .should('be.gt', 0)
    cy.get('.facet-block-keyword-inner > button > span').should('have.text', 'Tags')
  })

  it('When filtering by keyword I should get a smaller results list', () => {
    let results = 0;
    cy.get('.dc-results-list ol').children().each((item) => {
      results += 1;
    }).then(() => {
      cy.get('.inner-keyword-facets > .show-more-wrapper > .show-more-container > :nth-child(1) > label').click()
      cy.wait(2000)

      let filtered = 0;
      cy.get('.dc-results-list ol').children().each((element) => {
        filtered += 1;
      }).then(() => {
        expect(filtered).to.be.lessThan(results)
      })
    })
  })

  it('I get the results I expect when using the keyword filter', () => {
    cy.findByLabelText('Sort by:').as("sortFilter")
    cy.get("@sortFilter").select('title')
    cy.get('.inner-keyword-facets > .show-more-wrapper > .show-more-container > :nth-child(5) > label', { timeout: 20000 }).click()
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2', { timeout: 60000 })
      .should('contain', 'Gold Prices in London 1950-2008 (Monthly)')
  });

  // PUBLISHER FILTER
  it('I get correct results when using the publisher filter', () => {
    cy.findByLabelText('Sort by:').as("sortFilter")
    cy.get("@sortFilter").select('title')
    cy.get('.inner-publisher__name-facets > .show-more-wrapper > .show-more-container > :nth-child(3) > label', { timeout: 10000 }).click()
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2', { timeout: 40000 })
      .should('contain', 'Afghanistan Election Districts')
  });

  // FORMAT FILTER
  // Not implemented by default in demo build
  it.skip('Check that the Format facet block has options', () => {
    cy.get(':nth-child(3) > .list-group').children()
      .its('length')
      .should('be.gt', 0)
    cy.get(':nth-child(3) > h3').should('have.text', 'Format')
  })

  it.skip('When filtering by format I should get a smaller results list', () => {
    cy.get('.search-list').children()
      .its('length').as('results')
    cy.get(':nth-child(2) > .list-group > :nth-child(1) > a').click()
    cy.get('.search-list').children()
      .its('length').as('filtered')
    expect('@filtered').to.be.lessThan('@results')
  })
})
