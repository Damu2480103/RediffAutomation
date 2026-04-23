class LoginPage {

    ORIGIN_URL           = 'https://mail.rediff.com/cgi-bin/login.cgi';
    EMPTY_USER_ALERT_MSG = 'Please enter a valid user name';

    proceedBtn    = '[name="proceed"]';
    forgotLink    = '.forgot-link > a';
    newRediffLink = 'a[title="Create new Rediffmail account"]';

    clickProceedAndForgotPassword() {

        const proceedBtn = this.proceedBtn;
        const forgotLink = this.forgotLink;

        cy.origin(this.ORIGIN_URL, { args: { proceedBtn, forgotLink } }, ({ proceedBtn, forgotLink }) => {

            cy.on('window:alert', (t) => {
                expect(t).to.equal('Please enter a valid user name');
            });

            cy.get(proceedBtn).click();
            cy.get(forgotLink).click();
        });
    }

    clickNewRediffId() {

        const newRediffLink = this.newRediffLink;

        cy.origin(this.ORIGIN_URL, { args: { newRediffLink } }, ({ newRediffLink }) => {

           // Cypress.on('uncaught:exception', () => false);

            cy.get(newRediffLink).first().click();
        });
    }
}

export default new LoginPage();