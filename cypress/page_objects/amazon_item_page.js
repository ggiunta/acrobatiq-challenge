var AmazonItemPage = function(cy) {
    this.cy = cy

    const addToCartButton = '#add-to-cart-button-ubb'

    this.clickOnAddToCart = function (string) {
        cy.get(addToCartButton).click()
    }
};

module.exports = AmazonItemPage