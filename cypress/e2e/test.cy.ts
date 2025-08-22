describe('Init Test Suite', () => {
  it('should visit local page', () => {
    cy.visit('http://192.168.1.19:3000');
  })
})