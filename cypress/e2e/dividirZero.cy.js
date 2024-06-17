describe('Testes para função dividir', () => {
    beforeEach(() => {
      // Carrega a página HTML
      cy.visit('/')
    })

    it('Deve lidar com divisão por zero ao clicar no botão', () => {
            cy.window().then((win) => {
            cy.get('#register-num1').type('10')
            cy.get('#register-num2').type('0')
            cy.get('#bt-dividir').click()
            cy.get('#register-resultado').should('have.value', 'Infinity')
        })
    }) 
})