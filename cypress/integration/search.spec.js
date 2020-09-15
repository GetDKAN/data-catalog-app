import searchFacets from '../fixtures/searchFacets.json';
import searchResults from '../fixtures/searchResults.json';

function updateFacets(facetsFx, updatedFacets) {
  // EXAMPLE FACET: {type: '', name: '', total: ''}
  let newFacets = facetsFx.facets.map((facet) => {
    if (updatedFacets.length) {
      facet.total = 0;
    }
    updatedFacets.forEach((f) => {
      if(f.name === facet.name && f.type === facet.type) {
        facet.total = f.total;
      }
    })
    return facet;
  });
  return {facets: newFacets};
}

function updateResults(resultsFx, updatedResults) {
  let newResults = {};
  let tempResults = {};
  for(let key in resultsFx.results) {
    if(updatedResults.includes(key)) {
      tempResults[key] = resultsFx.results[key]
    }
  }
  newResults.total = Object.keys(tempResults).length;
  newResults.results = tempResults;
  return newResults;
}

context('Search', () => {
  const defaultApi = 'fulltext=&page=1&page-size=10&sort=modified&sort_order=desc';
  const fulltextSearch = 'fulltext=gold&page=1&page-size=10&sort=modified&sort_order=desc';
  const searchList = '.dc-results-list ol';
  // HEADER
  it('When I visit the search page I see a header', () => {
    // Test setup
    cy.server();
    cy.route(`**/search?${defaultApi}**`, 'fx:searchResults');
    cy.route(`**/search/facets?${defaultApi}`, 'fx:searchFacets');
    cy.visit('/search');
    // Load default page
    cy.findByRole('heading', { name: 'Datasets' });
  });

  // FULLTEXT FILTER
  it('I can use the text input filter', () => {
    // Test setup
    cy.server();
    cy.route(`**/search?${defaultApi}**`, 'fx:searchResults');
    cy.route(`**/search/facets?${defaultApi}`, 'fx:searchFacets');
    cy.route(`**facets?${fulltextSearch}`, updateFacets(searchFacets, [
      {type: 'publisher__name', name: 'State Economic Council', total: '1'},
      {type: 'theme', name: 'Finance and Budgeting', total: '1'},
      {type: 'keyword', name: 'time-series', total: '1'},
      {type: 'keyword', name: 'price', total: '1'},
      {type: 'keyword', name: 'economy', total: '1'},
    ]));
    cy.route(`**search?${fulltextSearch}**`, updateResults(searchResults, [
      'dkan_dataset/5dc1cfcf-8028-476c-a020-f58ec6dd621c'
    ]));
    cy.visit('/search');
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
    const sortFilter = 'Sort by:';
    const sortByTitle = 'fulltext=&page=1&page-size=10&sort=title'
    cy.server();
    cy.route(`**/search?${defaultApi}**`, 'fx:searchResults');
    cy.route(`**/search/facets?**`, 'fx:searchFacets');
    cy.route(`**search?${sortByTitle}**`, () => ({
      total: "10",
      results: {
        'dkan_dataset/c9e2d352-e24c-4051-9158-f48127aa5692': searchResults.results['dkan_dataset/c9e2d352-e24c-4051-9158-f48127aa5692'],
        'dkan_dataset/d460252e-d42c-474a-9ea9-5287b1d595f6': searchResults.results['dkan_dataset/d460252e-d42c-474a-9ea9-5287b1d595f6'],
        'dkan_dataset/cedcd327-4e5d-43f9-8eb1-c11850fa7c55': searchResults.results['dkan_dataset/cedcd327-4e5d-43f9-8eb1-c11850fa7c55'],
        'dkan_dataset/5dc1cfcf-8028-476c-a020-f58ec6dd621c': searchResults.results['dkan_dataset/5dc1cfcf-8028-476c-a020-f58ec6dd621c'],
        'dkan_dataset/fb3525f2-d32a-451e-8869-906ed41f7695': searchResults.results['dkan_dataset/fb3525f2-d32a-451e-8869-906ed41f7695'],
        'dkan_dataset/95f8eac4-fd1f-4b35-8472-5c87e9425dfa': searchResults.results['dkan_dataset/95f8eac4-fd1f-4b35-8472-5c87e9425dfa'],
        'dkan_dataset/1f2042ad-c513-4fcf-a933-cae6c6fd35e6': searchResults.results['dkan_dataset/1f2042ad-c513-4fcf-a933-cae6c6fd35e6'],
        'dkan_dataset/74c06c81-9fe0-439c-aba9-cd5c980a6df4': searchResults.results['dkan_dataset/74c06c81-9fe0-439c-aba9-cd5c980a6df4'],
        'dkan_dataset/e1f2ebcd-ee23-454f-87b5-df0306658418': searchResults.results['dkan_dataset/e1f2ebcd-ee23-454f-87b5-df0306658418'],
        'dkan_dataset/934400f2-a5dc-4abf-bf16-3f17335888d3': searchResults.results['dkan_dataset/934400f2-a5dc-4abf-bf16-3f17335888d3'],
      }
    }))
    cy.visit('/search');
    cy.findByLabelText('Health Care (2)').should('exist');
    cy.findByLabelText(sortFilter).should('exist');
    cy.findByLabelText(sortFilter).select('title');
    //expand tests for sort
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'Afghanistan Election Districts');
    cy.findByLabelText('Health Care (2)').should('exist');
    cy.findByText('10 datasets found').should('exist');
  });

  // TOPIC FILTER
  it('I can use the topic filter', () => {
    const filterTheme = 'fulltext=&page=1&page-size=10&sort=modified&sort_order=desc&theme=City Planning';
    cy.server();
    cy.route(`**/search?${defaultApi}&facets=0`, 'fx:searchResults');
    cy.route(`**/search/facets?${defaultApi}`, 'fx:searchFacets');
    cy.route(`**facets?${filterTheme}`, updateFacets(searchFacets, [
      {type: 'publisher__name', name: 'State Economic Council', total: '1'},
      {type: 'publisher__name', name: 'Committee on International Affairs', total: '2'},
      {type: 'theme', name: 'City Planning', total: '3'},
      {type: 'theme', name: 'Transportation', total: '1'},
      {type: 'keyword', name: 'politics', total: '1'},
      {type: 'keyword', name: 'transparency', total: '1'},
      {type: 'keyword', name: 'country-afghanistan', total: '1'},
      {type: 'keyword', name: 'election', total: '2'},
    ]));
    cy.route(`**search?${filterTheme}**`, updateResults(searchResults, [
      'dkan_dataset/c9e2d352-e24c-4051-9158-f48127aa5692',
      'dkan_dataset/cedcd327-4e5d-43f9-8eb1-c11850fa7c55',
      'dkan_dataset/934400f2-a5dc-4abf-bf16-3f17335888d3',
    ]));
    cy.visit('/search');
    cy.findByText('City Planning (3)').click();
    cy.get('.dc-search-results-message').contains('3 datasets found in Topics: City Planning');
    cy.findByText('City Planning (3)').should('exist');
    cy.findByText('Finance and Budgeting (0)').should('exist');
    cy.get(searchList).children().its('length').should('eq', 3);
    cy.wait(5)
    cy.findByText('City Planning (3)').click();
    cy.get('.dc-search-results-message').contains('10 datasets found');
    cy.get(searchList).children().its('length').should('eq', 10);
    cy.findByText('Finance and Budgeting (4)').should('exist');
  });

  // TAG FILTER
  it.only('I can use the tag filter', () => {
    cy.visit('/search');
    cy.get('.dc-search-results-message').contains('10 datasets found');
    cy.get(searchList).children().its('length').should('eq', 10);
    cy.findByRole('heading', {name: 'London Deprivation Index'}).should('exist');
    // Click economy
    cy.findByText('economy (3)').click();
    cy.get('.dc-search-results-message').contains('3 datasets found in Tags: economy');
    cy.get(searchList).children().its('length').should('eq', 3);
    cy.findByText('Finance and Budgeting (3)').should('exist');
    cy.findByRole('heading', {name: 'London Deprivation Index'}).should('exist');
    cy.findByRole('heading', {name: 'US National Foreclosure Statistics January 2012'}).should('exist');
    // Click united kingdom
    cy.findByText('United Kingdom (1)').click();
    cy.get('.dc-search-results-message').contains('1 dataset found in Tags: economy, United Kingdom');
    cy.get(searchList).children().its('length').should('eq', 1);
    cy.findByText('crime (0)').should('exist');
    cy.findByRole('heading', {name: 'London Deprivation Index'}).should('exist');
    // click economy
    cy.findByText('economy (1)').click();
    cy.get('.dc-search-results-message').contains('1 dataset found in Tags: United Kingdom');
    cy.get(searchList).children().its('length').should('eq', 1);
    cy.findByText('Finance and Budgeting (1)').should('exist');
    cy.findByRole('heading', {name: 'London Deprivation Index'}).should('exist');
    cy.findByRole('heading', {name: 'US National Foreclosure Statistics January 2012'}).should('not','exist');

  });

  // PUBLISHER FILTER
  it.skip('I can use the publisher filter', () => {
    cy.wait(2000)
    const sortFilter = cy.findByLabelText('Sort by:')
    sortFilter.select('title');
    //expand tests for sort
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'Afghanistan Election Districts')
  });

  // PAGE SIZE
  it.skip('I can change the amount of results per page', () => {
    cy.wait(2000)
    const sortFilter = cy.findByLabelText('Sort by:')
    sortFilter.select('title');
    //expand tests for sort
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'Afghanistan Election Districts')
  });

  // PAGINATION
  it.skip('I can navigate pages when available', () => {
    cy.wait(2000)
    const sortFilter = cy.findByLabelText('Sort by:')
    sortFilter.select('title');
    //expand tests for sort
    cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
      .should('contain', 'Afghanistan Election Districts')
  });

   //Search Page Text Input Filter
   it('When I enter text into the search input field on the search page, I should see the number of datasets that match.', () => {
     cy.get('#inputSearch').type('election')
     cy.get('.dc-search-results-message > p').should('contain', 'datasets found for "election"')
     // Pluck the number from the results summary message.
     cy.get('.dc-search-results-message').as('count')
     cy.get('@count').invoke('text')
         .then((count) => {
           count = parseInt(count.substr(0,5));
           cy.log('message', count)
           // The summary number should equal the datasets returned.
           cy.get('.dc-results-list ol').children().its('length').should('eq', count)
         })
     // Results list.
     cy.get('.dc-results-list ol').children().each(function($el, i) {
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
     cy.get('select#dc-search-list-sort').select('title')
     cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(1) h2')
       .should('contain', 'Afghanistan Election Districts')
     cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(2) h2')
       .should('contain', 'Crime Data for the Ten Most Populous Cities in the U.S.')
     cy.get('.dc-results-list ol div.dc-search-list-item:nth-child(3) h2')
       .should('contain', 'Florida Bike Lanes')
   })


   // TOPIC FILTER
   it('The topics facet block should contain 5 topics and one legend', () => {
     cy.get('h2.facet-block-theme-inner').should('have.text','Topics')
     cy.get('.inner-theme-facets .show-more-container').children().should('have.length', 5)
   })

   it.skip('wip - Get expected values from the data.json', () => {
     let jsonTopics = [];
     cy.fixture('data.json').then((data) => {
       Cypress._.each(data, (d) => {
         Cypress._.each(d.theme, (theme) => {
           if (!jsonTopics.includes(theme.title)) {
             jsonTopics.push(theme.title)
           }
         })
       })
       console.log(jsonTopics)
     })
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

   it('Check results are returned when filtering for topic 1', () => {
     cy.get('.inner-theme-facets > .show-more-wrapper > .show-more-container > :nth-child(1) > label').click()
     cy.get('.dc-search-results-message').should('not.contain', '0')
     cy.get('.dc-search-results-message').should('contain', 'dataset')
   })

   it('Check results are returned when filtering for topic 2', () => {
     cy.get('.inner-theme-facets > .show-more-wrapper > .show-more-container > :nth-child(2) > label').click()
     cy.get('.dc-search-results-message').should('not.contain', '0')
     cy.get('.dc-search-results-message').should('contain', 'dataset')
   })

   it('Check results are returned when filtering for topic 3', () => {
     cy.get('.inner-theme-facets > .show-more-wrapper > .show-more-container > :nth-child(3) > label').click()
     cy.get('.dc-search-results-message').should('not.contain', '0')
     cy.get('.dc-search-results-message').should('contain', 'dataset')
   })

   it('Check results are returned when filtering for topic 4', () => {
     cy.get('.inner-theme-facets > .show-more-wrapper > .show-more-container > :nth-child(4) > label').click()
     cy.get('.dc-search-results-message').should('not.contain', '0')
     cy.get('.dc-search-results-message').should('contain', 'dataset')
   })

   it('Check results are returned when filtering for topic 5', () => {
     cy.get('.inner-theme-facets > .show-more-wrapper > .show-more-container > :nth-child(5) > label').click()
     cy.get('.dc-search-results-message').should('not.contain', '0')
     cy.get('.dc-search-results-message').should('contain', 'dataset')
   })

   // KEYWORD FILTER
   it('Check that the tags facet block has options', () => {
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
       cy.wait(1000)

       let filtered = 0;
       cy.get('.dc-results-list ol').children().each((element) => {
         filtered += 1;
       }).then(() => {
         expect(filtered).to.be.lessThan(results)
       })
     })
   })


   // FORMAT FILTER
   // Not implemented by default in demo build
   it.skip('Check that the Format facet block has options', () => {
     cy.get(':nth-child(3) > .list-group').children()
       .its('length')
       .should('be.gt', 0)
     cy.get(':nth-child(3) > h3').should('have.text','Format')
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
