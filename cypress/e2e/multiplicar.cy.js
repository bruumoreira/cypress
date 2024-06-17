describe('Testes para função multiplicar', () => {
    beforeEach(() => {
      // Carrega a página HTML
      cy.visit('/')
    })
   
    it('Deve dividir multiplicar', () => {
      cy.window().then((win) => {
        cy.get('#register-num1').type('10')
        cy.get('#register-num2').type('2')
        cy.get('#bt-multiplica').click()
        cy.get('#register-resultado').should('have.value', '20')
      })
    })
})
  