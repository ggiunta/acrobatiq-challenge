describe('Amazon Tests', () => {
    it('Happy path 3', () => {
        let homePage = new (require('../../page_objects/amazon_home_page.js'))(cy)
        let searchResultsPage = new (require('../../page_objects/amazon_search_results_page.js'))(cy)
        let itemPage = new (require('../../page_objects/amazon_item_page.js'))(cy)

        homePage.visit()
        homePage.searchFor("Control ps4")

        searchResultsPage.clickOnResult("Control PS4 - PlayStation 4")

        itemPage.clickOnAddToCart()

        homePage.assertCartCountIs('1')
    })
  })