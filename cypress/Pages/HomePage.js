

class HomePage {

    signInBtn     = 'a.signin';
    footerSection = '.footer';
    policyLink    = '[href="https://www.rediff.com/w3c/policy.html"]';

    clickSignIn() {
        cy.get(this.signInBtn).click();
    }

    scrollToFooter() {
        cy.get(this.footerSection).scrollIntoView();
    }

    clickPolicyLink() {
        cy.get(this.policyLink).click();
    }
}

export default new HomePage();