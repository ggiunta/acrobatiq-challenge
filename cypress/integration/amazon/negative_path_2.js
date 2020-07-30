describe('Amazon Tests', () => {
    it('Negative path 2', () => {
        const pageNotFoundText = '[alt="Sorry! We couldn\'t find that page. Try searching or go to Amazon\'s home page."]'

        cy.visit('/invalid', { failOnStatusCode: false })

        cy.get(pageNotFoundText)
    })
  })