

class PolicyPage {

    
    policyHeading = 'table > tbody > tr .bold';
    EXPECTED_HEADING = 'Rediff.com India Ltd. - Privacy Policy';

    
    verifyPolicyPageLoaded() {
        cy.get(this.policyHeading)
            .should('be.visible');                              

        cy.get(this.policyHeading)
            .first()
            .should('have.text', this.EXPECTED_HEADING);       
    }
}

export default new PolicyPage();