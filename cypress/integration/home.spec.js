context('Home', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('I should see a logo in the header region', () => {
    cy.findByAltText("Open Data Catalog")
  })

  it('I should see the expected custom text on the home page', () => {
    cy.findByRole('heading', { name: 'Welcome to DKAN' })
    cy.findByRole('button', { name: 'Go' })
  })

  it('When on the home page I should see 5 topics in the Dataset Topics region', () => {
    var topics = [
      'Transportation',
      'City Planning',
      'Finance and Budgeting',
      'Public Safety',
      'Health Care'
    ]
    // Should look into adding the text as titles to the SVGs and checking that way
    topics.forEach((text) => cy.findByText(text));
  })

  it('The featured datasets region should contain 3 datasets', () => {
    const regionLinks = [
      'US National Foreclosure Statistics January 2012',
      'Gold Prices in London 1950-2008 (Monthly)',
      'Afghanistan Election Districts',
    ];

    regionLinks.forEach((text) => cy.findByRole('heading', { name: text }));
  })

  it('When on the home page I can see the elements on the leftnav footer menu', () => {
    const footerLinks = [
      'Documentation',
      'Visit Demo',
      'Download',
      'CivicActions',
      'Project Open Data',
      'DCAT',
      'Drupal',
      'Open Source Open Data',
    ];
    cy.get('.dc-footer').within(() => {
      footerLinks.forEach((text) => cy.findByRole('link', { name: text }).should('exist'))
    })
  })

})
