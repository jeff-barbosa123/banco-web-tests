describe('Login', () => {
  //Arrange Preparação para teste
  it('login com dados v´lidos devem permitir entrada no sistema', () => {
    //Act
    cy.visit('http://localhost:4000/')
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()
    //Assert
    cy.contains('h4','Realizar Transferência').should('be.visible')
  })
})