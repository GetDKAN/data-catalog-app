context('Publishers', () => {

  beforeEach(() => {
      cy.visit("/")
    })

    it('When I click the main menu Publishers link I should end up on the Publishers page', () => {
      cy.findByRole('link', { name: 'Publishers' }).click({ force: true });
      cy.findByRole('heading', { name: 'Dataset Publishers' });
      cy.findByAltText('State Economic Council');
      cy.findByRole('heading', { name: 'State Economic Council' });
      cy.findByAltText('National Health Council');
      cy.findByRole('heading', { name: 'National Health Council' });
      cy.findByAltText('Committee on International Affairs');
      cy.findByRole('heading', { name: 'Committee on International Affairs' });
    })
    // Enable when components are updated.
    it('Links should take me to the search page', () => {
      cy.findByRole('link', { name: 'Publishers' }).click({ force: true });
      cy.get('.dc-publisher-list  > :nth-child(1) > a').should('have.attr', 'href').and('eq', '/search/?publisher__name=State Economic Council');
    })

  });
