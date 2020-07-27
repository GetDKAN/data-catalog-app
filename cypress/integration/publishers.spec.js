context('Publishers', () => {

  beforeEach(() => {
      cy.visit("/")
    })

    it.only('When I click the main menu Publishers link I should end up on the Publishers page', () => {
      cy.findByRole('link', { name: 'Publishers' }).click({ force: true });
      cy.findByRole('heading', { name: 'Dataset Publishers' });
      cy.findByAltText('State Economic Council');
      cy.findByRole('heading', { name: 'State Economic Council' });
      cy.findByAltText('Advisory Council for Infectious Disease');
      cy.findByRole('heading', { name: 'Advisory Council for Infectious Disease' });
      cy.findByAltText('Committee on International Affairs');
      cy.findByRole('heading', { name: 'Committee on International Affairs' });
    })

  });
