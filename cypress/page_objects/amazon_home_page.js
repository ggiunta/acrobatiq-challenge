var AmazonHomePage = function(cy) {
    this.cy = cy

    const hamburgerMenuButton = '#nav-hamburger-menu'
    const booksCatText = 'Kindle E-readers & Books'
    const kindlePaperwhiteCatText = 'Kindle Paperwhite'
    const searchInputBox = '#twotabsearchtextbox'
    const cartCountElement = '#nav-cart-count'
    const signInButton = '#nav-link-accountList'

    this.visit = function () {
        cy.visit('/')
    }

    this.expandHamburgerMenu = function () {
        cy.get(hamburgerMenuButton).click()

        this.waitForMenuToExpand()
    }

    this.clickOnBooksCat = function () {
        this.clickOnCategory(booksCatText)
    }

    this.clickOnKindlePaperwhiteCat = function () {
        this.clickOnCategory(kindlePaperwhiteCatText)
    }

    this.clickOnCategory = function (string) {
        cy.contains(string).click()
        this.waitForMenuToExpand()
    }

    this.waitForMenuToExpand = function () {
        cy.wait(3000)
    }

    this.searchFor = function (string) {
        cy.get(searchInputBox)
        .type(string)
        .type('{enter}')
    }

    this.assertCartCountIs = function (expectedCount) {
        cy.get(cartCountElement).should('have.text', expectedCount)
    }

    this.clickOnSignIn = function () {
        cy.get(signInButton).click()
    }
};

module.exports = AmazonHomePage