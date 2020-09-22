context('Dataset', () => {
    beforeEach(() => {
      cy.visit('/dataset/fb3525f2-d32a-451e-8869-906ed41f7695')
    })

    it('I see the title and description', () => {
      cy.get('h1').should('have.text', 'Market Value Analysis - Urban Redevelopment Authority')
      cy.get('.col-md-9').contains('In late 2016, the URA, in conjunction with Reinvestment Fund, completed the 2016 Market Value Analysis')
    })

    it('I don\'t see a datatable if a distribution doesn\'t contain a csv file.', () => {
        cy.get(`.dc-datatable`).should('not.exist')
    })
})
