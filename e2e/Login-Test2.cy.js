describe('Tes Skenario - Login', () => {
  it('Tes 2 - Login dengan menginputkan Email yang salah dan Password yang valid', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://127.0.0.1:8000/');
    cy.get("input[name='email']").type('administratorgmail.com');
    cy.wait(2000);
    cy.get("input[name='password']").type('12345678');
    cy.wait(2000);
    cy.get("button[type='submit']").click();
    cy.wait(3000);
    
  })
})