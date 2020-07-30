var AmazonSearchResultsPage = function(cy) {
    this.cy = cy

    this.assertResultsContain = function (string) {
        cy.contains(string)
    }

    this.clickOnResult = function (string) {
        cy.contains(string).click()
    }
};

module.exports = AmazonSearchResultsPage