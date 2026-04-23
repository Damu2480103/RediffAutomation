class BillPayPage {

  ORIGIN_URL     = 'https://pay.rediff.com';
  FEEDBACK_URL   = 'https://register.rediff.com/feedback/rediffpay_feedback.php';

  verifyBillPayPageLoaded() {
    cy.url().should('include', 'pay.rediff.com');
  }

  verifyPageBodyVisible() {
    cy.get('body').should('be.visible');
  }

  scrollToBottom() {
    cy.scrollTo('bottom');
  }

  clickCustomerSupport() {
    cy.get('a[href*="feedback"], a[href*="support"], a:contains("Customer Support"), a:contains("Support"), a:contains("Help")')
      .first()
      .click({ force: true });
  }

  navigateToFeedbackPage() {
    cy.visit(this.FEEDBACK_URL);
  }

}

export default new BillPayPage();