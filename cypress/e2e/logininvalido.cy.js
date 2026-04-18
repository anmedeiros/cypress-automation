import loginPage from '../pages/loginPage'

describe('Login inválido', () => {

  it('Não deve logar com senha errada', () => {

    cy.fixture('login').then((dados) => {

      cy.login(dados.invalido.usuario, dados.invalido.senha)

      cy.get('[data-test="error"]').should('be.visible')

    })

  })

})