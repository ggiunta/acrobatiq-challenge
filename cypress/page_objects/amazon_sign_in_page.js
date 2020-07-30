var AmazonSignInPage = function(cy) {
    this.cy = cy

    const emailInput = '#ap_email'
    const continueButton = '#continue'

    this.enterEmail = function (string) {
        cy.get(emailInput).type(string)
    }

    this.submit = function () {
        cy.get(continueButton).click()
    }

    this.assertInvalidEmailMessageDisplayed = function () {
        cy.contains('We cannot find an account with that email address')
    }
};

module.exports = AmazonSignInPage