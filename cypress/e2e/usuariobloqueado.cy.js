import loginPage from '../pages/loginPage'

describe('Usuário bloqueado', () => {

  it('Não deve permitir login com usuário bloqueado', () => {

    loginPage.acessarSite()
    loginPage.login('locked_out_user', 'secret_sauce')

    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'locked out')

  })

})