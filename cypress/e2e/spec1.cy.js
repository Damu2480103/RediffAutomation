import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import PolicyPage from '../Pages/PolicyPage';
import ForgotPasswordPage from '../Pages/ForgotPasswordPage';
import RegisterPage from '../Pages/RegisterPage'; 
import BillPayPage from '../Pages/BillPayPage';
import FeedBackPage from '../Pages/FeedBackPage';

describe.skip("Rediff Major Project - Test Cases", () => {

  beforeEach(() => {
    cy.visit('https://rediff.com');
  });

  it("T1: navigate to login page", () => {
    HomePage.clickSignIn();
    cy.url().should('include', 'login.cgi');
  });
  it("T2:show alert when Proceed is clicked with empty username", () => {
    HomePage.clickSignIn();
    LoginPage.clickProceedAndForgotPassword();
  });
  it("T3:show alert on Forgot Password page when email is empty", () => {
    HomePage.clickSignIn();
    LoginPage.clickProceedAndForgotPassword();
    ForgotPasswordPage.clickNextWithoutEmail(); 
  });
  it("T4: go back to login page from Forgot Password page", () => {
    HomePage.clickSignIn();
    LoginPage.clickProceedAndForgotPassword();
    ForgotPasswordPage.goBack();
    cy.url().should('include', 'login.cgi');
  });
  it("T5:scroll to footer section successfully", () => {
    HomePage.scrollToFooter();
    cy.get('.footer').should('be.visible');
  });
  it("T6: should open Policy page and verify the heading text", () => {
    HomePage.scrollToFooter();
    HomePage.clickPolicyLink();
    PolicyPage.verifyPolicyPageLoaded(); 
  });
  it("T7: should navigate to registration page on clicking Create New Rediffmail ID", () => {
    HomePage.clickSignIn();
    LoginPage.clickNewRediffId();
    cy.url().should('include', 'register.rediff.com');
  });
  it("T8: should return to homepage after navigating back twice from Forgot Password page", () => {
    HomePage.clickSignIn();
    LoginPage.clickProceedAndForgotPassword();
    ForgotPasswordPage.goBack();  
    ForgotPasswordPage.goBack();
    cy.url().should('include', 'rediff.com');
    cy.get(HomePage.signInBtn).should('be.visible');
  });

});



describe("Rediff Register Page - Test Cases", () => {

  beforeEach(() => {
    cy.visit('https://rediff.com');
    HomePage.clickSignIn();
    LoginPage.clickNewRediffId();  
  });

  it("T1: should display Create a Rediffmail account heading", () => {
    RegisterPage.verifyPageLoaded();
  });

  it("T2: should accept text in Full Name field", () => {
    RegisterPage.enterFullName('John Doe');
  });

  it("T3: should accept text in Rediffmail ID field", () => {
    RegisterPage.enterRediffId('testuser123');
  });

  it("T4: should show availability message after clicking Check Availability", () => {
    RegisterPage.enterRediffId('testuser123');
    RegisterPage.clickCheckAvailability();
  });

  it("T5: should accept input in Password and Confirm Password fields", () => {
    RegisterPage.enterPasswords('Test@1234');
  });
  it("DEBUG: check month dropdown options", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.get('.month option').each(($el) => {
        cy.log($el.val() + ' = ' + $el.text());
      });
    });
  });

  it("T6: should allow selecting Day Month and Year from DOB dropdowns", () => {
    RegisterPage.selectDOB('15', '06', '2000');
  });

  it("T7: should have India selected by default in Country dropdown", () => {
    RegisterPage.verifyCountryIsIndia();
  });


  it("TC08: should select gender as Male or Female", () => {
    RegisterPage.selectGender('m');
});
it("DEBUG: check gender radio values", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.get('input[type="radio"]').each(($el) => {
        cy.log($el.val());
      });
    });
});

});




describe.skip("Rediff Bill Payments & Customer Support - Test Cases", () => {

  // Bill Pay tests
  describe("Bill Pay Page", () => {

    beforeEach(() => {
      cy.visit('https://pay.rediff.com');
    });

    it("TC01: should load the Rediff Bill Payments page", () => {
      BillPayPage.verifyBillPayPageLoaded();
    });

    it("TC02: should display the page body on Bill Payments page", () => {
      BillPayPage.verifyPageBodyVisible();
    });

    it("TC03: should scroll to bottom of Bill Payments page", () => {
      BillPayPage.scrollToBottom();
      cy.get('body').should('be.visible');
    });

  });

  // Feedback / Customer Support tests
  describe("Customer Support Page", () => {

    beforeEach(() => {
      cy.visit('https://register.rediff.com/feedback/rediffpay_feedback.php');
    });

    it("TC04: should load the Customer Support form page", () => {
      FeedBackPage.verifyFeedbackPageLoaded();
    });

    it("TC05: should display the form on Customer Support page", () => {
      FeedBackPage.verifyFormVisible();
    });

    it("TC06: should accept text in Name field", () => {
      FeedBackPage.enterName('John Doe');
    });

    it("TC07: should accept text in Email field", () => {
      FeedBackPage.enterEmail('john@gmail.com');
    });

    it("TC08: should accept text in Message field", () => {
      FeedBackPage.enterMessage('This is a test message');
    });

  });

});