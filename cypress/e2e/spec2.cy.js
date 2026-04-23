cy.on('uncaught:exception',()=>{
  return false;
})
describe('rediffMINI', () => {
  it('should load the homepage', () => {
      cy.visit('https://rediff.com'); 
      cy.get('.signin').click(); 
      cy.origin('https://mail.rediff.com/cgi-bin/login.cgi', () => {
          cy.on('window:alert', (str) => {
          expect(str).to.equal('Please enter a valid user name');
        })
      cy.get('[name="proceed"]').click();
       cy.get('.forgot-link > a').click();
      });
      //cy.get('.forgot-link > a').click();


      cy.origin('https://register.rediff.com', () => {
          cy.on('window:alert', (str) => {
            expect(str).to.equal('Please enter your email ID');
          })
      cy.get('[name="next"]').click();
      })
      cy.go('back');
      cy.go('back');
      cy.get('[href="https://www.rediff.com/w3c/policy.html"]').click();
      cy.get('[href="https://in.rediff.com/"]').should('be.visible');

  });


});