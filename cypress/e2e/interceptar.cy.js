describe('Intercept básico', () => {

  it('Só observar requisição', () => {

    cy.intercept('GET', '**/inventory*').as('getProdutos')

    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.wait('@getProdutos')

  })

})