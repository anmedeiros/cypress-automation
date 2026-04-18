describe('Intercept (conceito)', () => {

  it('Valida carregamento sem API real', () => {

    cy.login('standard_user', 'secret_sauce')

    cy.url().should('include', 'inventory')

    cy.get('.inventory_item').should('be.visible')

  })

})

// OBS:
// O SauceDemo não possui API real para produtos,
// portanto o intercept não é utilizado como validação principal.
// A validação é feita via UI.