describe('Testes para função subtrair', () => {
    beforeEach(() => {
      // Carrega a página HTML
      cy.visit('/')
    })
   
    it('Deve subtrair corretamente', () => {
      cy.window().then((win) => {
        cy.get('#register-num1').type('10')
        cy.get('#register-num2').type('4')
        cy.get('#bt-subtrair').click()
        cy.get('#register-resultado').should('have.value', '6')
      })
    })
})
  