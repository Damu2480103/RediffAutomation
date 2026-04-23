class RegisterPage {

  ORIGIN_URL = 'https://register.rediff.com';

  verifyPageLoaded() {
    cy.origin(this.ORIGIN_URL, () => {
      cy.contains('Create a Rediffmail account').should('be.visible');
    });
  }

  enterFullName(name) {
    cy.origin(this.ORIGIN_URL, { args: { name } }, ({ name }) => {
      cy.get("input[placeholder='Enter your full name']").clear().type(name);
      cy.get("input[placeholder='Enter your full name']").should('have.value', name);
    });
  }

  enterRediffId(id) {
    cy.origin(this.ORIGIN_URL, { args: { id } }, ({ id }) => {
      cy.get('input[placeholder="Enter Rediffmail ID"]').clear().type(id);
      cy.get('input[placeholder="Enter Rediffmail ID"]').should('have.value', id);
    });
  }

  clickCheckAvailability() {
    cy.origin(this.ORIGIN_URL, () => {
       Cypress.on('uncaught:exception', () => false);
      cy.get("input[value='Check availability']").click();
      cy.get('#check_availability span').should('be.visible');
    });
  }

  enterPasswords(password) {
    cy.origin(this.ORIGIN_URL, { args: { password } }, ({ password }) => {
      cy.get('#newpasswd').clear().type(password);
      cy.get('#newpasswd1').clear().type(password);
      cy.get('#newpasswd').should('have.value', password);
      cy.get('#newpasswd1').should('have.value', password);
    });
  }

  selectDOB(day, month, year) {
    cy.origin(this.ORIGIN_URL, { args: { day, month, year } }, ({ day, month, year }) => {
      cy.get('.day').select(day);
      cy.get('.month').select(month);
      cy.get('.year').select(year);
      cy.get('.day').should('have.value', day);
      cy.get('.month').should('have.value', month);
      cy.get('.year').should('have.value', year);
    });
  }

  verifyCountryIsIndia() {
    cy.origin(this.ORIGIN_URL, () => {
      cy.get('#country').should('have.value', '99');
    });
  }
  selectGender(gender) {
    cy.origin(this.ORIGIN_URL, { args: { gender } }, ({ gender }) => {
      cy.get(`input[type="radio"][value="${gender}"]`).click();
      cy.get(`input[type="radio"][value="${gender}"]`).should('be.checked');
    });
  }
}

export default new RegisterPage();