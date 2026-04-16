import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'

describe('Produtos', () => {

  beforeEach(() => {
    cy.fixture('login').then((dados) => {
    cy.login(dados.valido.usuario, dados.valido.senha)
    })
  })

  it('Deve adicionar produto no carrinho', () => {

    productsPage.adicionarProduto()
    productsPage.validarCarrinho()

  })

  it('Deve remover produto do carrinho', () => {

    productsPage.adicionarProduto()
    cy.get('.inventory_item button').first().click() // remove

    cy.get('.shopping_cart_badge').should('not.exist')

  })

})