import loginPage from '../pages/loginPage'

describe('Login válido', () => {

  it('Deve logar com sucesso', () => {

    cy.fixture('login').then((dados) => {

      cy.login(dados.valido.usuario, dados.valido.senha)

      cy.url().should('include', 'inventory')

    })

  })

})


//antes
//describe('Login com Page Object', () => {

  //it('Login com sucesso', () => {

    //loginPage.acessarSite()
    //loginPage.preencherUsuario('standard_user')
    //loginPage.preencherSenha('secret_sauce')
    //loginPage.clicarLogin()

    //cy.get('.title').should('contain', 'Products')
  //})

//})

