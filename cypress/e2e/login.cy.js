import loginPage from '../pages/loginPage'

describe('Login válido', () => {

  it('Deve logar com sucesso', () => {

    cy.fixture('login').then((dados) => {

      cy.login(dados.valido.usuario, dados.valido.senha)

      cy.url().should('include', 'inventory')

    })

  })

})




