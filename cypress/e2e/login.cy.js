import login from '../support/page/LoginPage'

describe('Login', () => {
  it('Deve efetuar o login com sucesso', () => {

    login.go() // acessando o site

    login.dataUser() // dados do usuário

    login.submit() // submeter o login
    cy.wait(2000)
    
    login.ValidationMessage() // Validando a mensagem de sucesso
  })
})