describe('Amazon Tests', () => {
    it('Negative path 3', () => {
        let homePage = new (require('../../page_objects/amazon_home_page.js'))(cy)
        let searchResultsPage = new (require('../../page_objects/amazon_search_results_page.js'))(cy)

        homePage.visit()
        homePage.searchFor("asfgdadfgadfgadfgadfg")
        searchResultsPage.assertResultsContain("No results for")
    })
  })