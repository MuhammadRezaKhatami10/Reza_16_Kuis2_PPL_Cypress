describe('Tes Skenario - Register', () => {
  it('Tes 2 - Register dengan mengiputkan email yang salah', () => {
    cy.once('uncaught:exception', () => false);
    cy.visit('http://127.0.0.1:8000/');
    cy.get("a[class='btn btn-inverse btn-mat btn-block waves-effect text-center m-b-1']").click();
    cy.wait(3000);
    cy.get("input[name='name']").type('reza123');
    cy.wait(2000);
    cy.get("input[name='email']").eq(0).type('reza1234gmail.com');
    cy.wait(2000);
    cy.get("input[name='password']").eq(0).type('12345678');
    cy.wait(2000);
    cy.get("input[id='password-confirm']").eq(0).type('12345678');
    cy.wait(2000);
    cy.get("button[class='btn btn-primary']").eq(0).click();
    cy.wait(3000);
  })
})