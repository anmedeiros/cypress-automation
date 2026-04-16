class LoginPage {

  acessarSite() {
    cy.visit('https://www.saucedemo.com/')
  }

  preencherUsuario(usuario) {
    cy.get('#user-name').type(usuario)
  }

  preencherSenha(senha) {
    cy.get('#password').type(senha)
  }

  clicarLogin() {
    cy.get('#login-button').click()
  }

  // ESSA FUNÇÃO QUE ESTÁ FALTANDO OU QUEBRADA
  login(usuario, senha) {
    this.preencherUsuario(usuario)
    this.preencherSenha(senha)
    this.clicarLogin()
  }

}

export default new LoginPage()