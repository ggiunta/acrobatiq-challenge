var AmazonHomePage = function(cy) {
    this.cy = cy

    const hamburgerMenuButton = '#nav-hamburger-menu'
    const booksCatButton = 'Kindle E-readers & Books'
    const kindlePaperwhiteCatButton = 'Kindle Paperwhite'
    const searchInputBox = '#twotabsearchtextbox'
    const cartCountElement = '#nav-cart-count'

    this.visit = function () {
        cy.visit('/')
    }

    this.expandHamburgerMenu = function () {
        cy.get(hamburgerMenuButton).click()

        this.waitForMenuToExpand()
    }

    this.clickOnBooksCat = function () {
        cy.contains(booksCatButton).click()

        this.waitForMenuToExpand()
    }

    this.clickOnKindlePaperwhiteCat = function () {
        cy.contains(kindlePaperwhiteCatButton).click()

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
        cy.get('#nav-link-accountList').click()
    }
};

module.exports = AmazonHomePage