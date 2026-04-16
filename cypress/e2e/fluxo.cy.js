import loginPage from '../pages/loginPage'
import productsPage from '../pages/productsPage'

describe('Fluxo completo - Login + Carrinho', () => {

it('Deve logar e adicionar produto no carrinho', () => {

     //acessar site
    loginPage.acessarSite()

     //login
    loginPage.login('standard_user', 'secret_sauce')

     //valida login
    cy.url().should('include', 'inventory')

    // adicionar produto
    productsPage.adicionarProduto()

     //valida carrinho
    cy.get('.shopping_cart_badge').should('be.visible')
    cy.get('.shopping_cart_badge').should('contain', '1')

    // ir para carrinho
    productsPage.irParaCarrinho()

     //valida página carrinho
    cy.url().should('include', 'cart')

  })

})