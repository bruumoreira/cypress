describe('Testes para função multiplicar', () => {
    beforeEach(() => {
      // Carrega a página HTML
      cy.visit('/')
    })

    it('Deve lidar com multiplicação por zero ao clicar no botão', () => {
            cy.window().then((win) => {
            cy.get('#register-num1').type('0')
            cy.get('#register-num2').type('20')
            cy.get('#bt-multiplica').click()
            cy.get('#register-resultado').should('have.value', '0')
        })
    }) 
})