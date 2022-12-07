describe('Tes Skenario - Login', () => {
  it('Tes 3 - Login dengan menginputkan Email yang valid dan Password yang salah', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://127.0.0.1:8000/');
    cy.get("input[name='email']").type('administrator@gmail.com');
    cy.wait(2000);
    cy.get("input[name='password']").type('12345678910');
    cy.wait(2000);
    cy.get("button[type='submit']").click();
    cy.wait(3000);
    
  })
})