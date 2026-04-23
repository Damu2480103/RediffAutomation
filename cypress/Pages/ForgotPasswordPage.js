

class ForgotPasswordPage {

    
    ORIGIN_URL          = 'https://register.rediff.com';
    EMPTY_EMAIL_ALERT   = 'Please enter your email ID';

    clickNextWithoutEmail() {
        cy.origin(this.ORIGIN_URL, () => {
            cy.on('window:alert', (t) => {
                expect(t).to.equal('Please enter your email ID');
            });

             cy.get('[name="next"]').click();   
           
        });
    }

    
    goBack() {
        cy.go('back');
    }
}

export default new ForgotPasswordPage();