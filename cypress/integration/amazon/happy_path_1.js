describe('Amazon Tests', () => {
    it('Happy path 1', () => {
        let homePage = new (require('../../page_objects/amazon_home_page.js'))(cy)

        homePage.visit()
        homePage.expandHamburgerMenu()
        homePage.clickOnBooksCat()
        homePage.clickOnKindlePaperwhiteCat()
    })
  })