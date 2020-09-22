context('Search', () => {
    beforeEach(() => {
      cy.visit('/search')
    })

    it('I find the expected search elements.', () => {
        cy.get('h1').should('contain','Datasets')
        cy.get('.dc-results-list ol').children().its('length').should('eq', 10)
        cy.findByPlaceholderText('Type your search term here').should('exist');
        cy.findByLabelText('Search').should('exist');
        cy.findByLabelText('Sort by:').should('exist');
        cy.findByText('10 datasets found').should('exist');
        cy.findByLabelText('City Planning (3)').should('exist');
        cy.findByText('Topics').should('exist');
        cy.findByText('Tags').should('exist');
    });
})
