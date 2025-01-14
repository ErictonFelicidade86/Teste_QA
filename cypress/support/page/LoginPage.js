class LoginPage {
    go(){
        cy.visit('https://planoaliados.com.br/portal/login')
    }

    dataUser(){
        cy.get('#model_Login').clear().type('057.484.723-50')
        cy.get('#model_Password').clear().type('654321')
    }

    submit() {
        cy.get('.v-card__actions > button.v-btn').click()
    }

    ValidationMessage() {
        cy.get('.v-snack__content')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
            expect(text.trim()).to.eq('Enviado com sucesso!');
        })
    }
}

export default new LoginPage()