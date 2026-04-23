class FeedBackPage {

  verifyFeedbackPageLoaded() {
    cy.get('body').should('be.visible');
  }

  verifyFormVisible() {
    cy.get('form').should('exist');
  }

  enterName(name) {
    cy.get('input[name="name"], input[placeholder*="Name"]')
      .first()
      .clear({ force: true })
      .type(name, { force: true });
  }

  enterEmail(email) {
    cy.get('input[name="email"], input[type="email"]')
      .first()
      .clear({ force: true })
      .type(email, { force: true });
  }

  enterMessage(message) {
    cy.get('textarea')
      .first()
      .clear({ force: true })
      .type(message, { force: true });
  }

  clickSubmit() {
    cy.get('input[type="submit"], button[type="submit"]')
      .first()
      .click({ force: true });
  }

}

export default new FeedBackPage();