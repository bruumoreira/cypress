describe('Testes para função soma', () => {
    beforeEach(() => {
      // Carrega a página HTML
      cy.visit('/')
    })
   
    it('Deve somar corretamente', () => {
      cy.window().then((win) => {
        cy.get('#register-num1').type('6')
        cy.get('#register-num2').type('6')
        cy.get('#bt-soma').click()
        cy.get('#register-resultado').should('have.value', '12')
      })
    })
})
  