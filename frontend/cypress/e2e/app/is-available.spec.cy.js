describe('site is available', () => {
  it('should be available on localhost:8000', () => {
    cy.visit('http://localhost:8000');
  });
});
