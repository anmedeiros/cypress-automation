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

  removerProduto() {
  cy.get('.inventory_item button').first().click()
}

  validarListaProdutos() {
  cy.get('.inventory_item').should('have.length.greaterThan', 0)
  cy.get('.inventory_item_name').should('be.visible')
  cy.get('.inventory_item_price').should('exist')
}

}

export default new ProductsPage()