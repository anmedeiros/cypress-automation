import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'

describe('Carrinho', () => {

  beforeEach(() => {
    cy.fixture('login').then((dados) => {
    cy.login(dados.valido.usuario, dados.valido.senha)
    })
  })

  it('Deve acessar o carrinho com produto', () => {

    cy.addProduto()
    cy.get('.shopping_cart_link').click()

    cy.get('.cart_item').should('be.visible')

  })

  it('Carrinho deve iniciar vazio', () => {

    cy.get('.shopping_cart_link').click()

    cy.get('.cart_item').should('not.exist')

  })

})