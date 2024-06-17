describe('Testes para função dividir', () => {
    beforeEach(() => {
      // Carrega a página HTML
      cy.visit('/')
    })
   
    it('Deve dividir corretamente', () => {
      cy.window().then((win) => {
        cy.get('#register-num1').type('10')
        cy.get('#register-num2').type('2')
        cy.get('#bt-dividir').click()
        cy.get('#register-resultado').should('have.value', '5')
      })
    })

})
  