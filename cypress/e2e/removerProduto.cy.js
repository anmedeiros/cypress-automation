import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'

describe('Produtos - Remover', () => {

  beforeEach(() => {
    cy.fixture('login').then((dados) => {
    cy.login(dados.valido.usuario, dados.valido.senha)
    })
  })

 it('Deve remover produto do carrinho', () => {

    cy.addProduto()

    // remove (mesmo botão vira REMOVE)
    cy.get('.inventory_item button').first().click()

    cy.get('.shopping_cart_badge').should('not.exist')

  })

})