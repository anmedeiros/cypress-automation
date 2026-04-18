import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'

describe('Fluxo completo (E2E)', () => {

  it('Login + produto + carrinho', () => {

    cy.login('standard_user', 'secret_sauce')

    cy.get('.inventory_item button').first().click()

    cy.get('.shopping_cart_link').click()

    cy.get('.cart_item').should('be.visible')

  })

})