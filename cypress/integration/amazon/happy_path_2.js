describe('Amazon Tests', () => {
    it('Happy path 2', () => {
        let homePage = new (require('../../page_objects/amazon_home_page.js'))(cy)
        let searchResultsPage = new (require('../../page_objects/amazon_search_results_page.js'))(cy)

        homePage.visit()
        homePage.searchFor("Control ps4")
        searchResultsPage.assertResultsContain("Control PS4 - PlayStation 4")
    })
  })