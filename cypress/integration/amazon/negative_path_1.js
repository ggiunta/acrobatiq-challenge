describe('Amazon Tests', () => {
    it('Negative path 1', () => {
        let homePage = new (require('../../page_objects/amazon_home_page.js'))(cy)
        let signInPage = new (require('../../page_objects/amazon_sign_in_page.js'))(cy)

        homePage.visit()
        homePage.clickOnSignIn()

        signInPage.enterEmail("acrobatiq_invalid_1234")
        signInPage.submit()
        signInPage.assertInvalidEmailMessageDisplayed()
    })
  })