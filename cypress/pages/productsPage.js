class ProductsPage {

  validarProdutos() {
    cy.url().should('include', 'inventory')
  }

  adicionarProduto() {
    cy.get('.inventory_item button').first().click()
  }

  validarCarrinho() {
    cy.get('.shopping_cart_badge').should('be.visible')
  }

  irParaCarrinho() {
    cy.get('.shopping_cart_link').click()
  }

}

export default new ProductsPage()