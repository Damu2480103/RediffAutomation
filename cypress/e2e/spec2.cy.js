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


describe("Rediff Register Page - Test Cases", () => {

  beforeEach(() => {
    cy.visit('https://rediff.com');
    cy.get('a.signin').click();
    cy.origin('https://mail.rediff.com/cgi-bin/login.cgi', () => {
      cy.get('a[title="Create new Rediffmail account"]').first().click();
    });
  });

  it("T1: should display Create a Rediffmail account heading", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.contains('Create a Rediffmail account').should('be.visible');
    });
  });

  it("T2: should accept text in Full Name field", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.get("input[placeholder='Enter your full name']")
        .clear().type('John Doe')
        .should('have.value', 'John Doe');
    });
  });

  it("T3: should accept text in Rediffmail ID field", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.get('input[placeholder="Enter Rediffmail ID"]')
        .clear().type('testuser123')
        .should('have.value', 'testuser123');
    });
  });

  it("T4: should show availability message after clicking Check Availability", () => {
    cy.origin('https://register.rediff.com', () => {
      Cypress.on('uncaught:exception', () => false);
      cy.get('input[placeholder="Enter Rediffmail ID"]')
        .clear().type('testuser123');
      cy.get("input[value='Check availability']").click();
      cy.get('#check_availability span').should('be.visible');
    });
  });

  it("T5: should accept input in Password and Confirm Password fields", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.get('#newpasswd').clear().type('Test@1234')
        .should('have.value', 'Test@1234');
      cy.get('#newpasswd1').clear().type('Test@1234')
        .should('have.value', 'Test@1234');
    });
  });

  it("T6: should allow selecting Day Month and Year from DOB dropdowns", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.get('.day').select('15');
      cy.get('.month').select('06');
      cy.get('.year').select('2000');
      cy.get('.day').should('have.value', '15');
      cy.get('.year').should('have.value', '2000');
    });
  });

  it("T7: should have India selected by default in Country dropdown", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.get('#country').should('have.value', '99');
    });
  });

  it("T8: should select gender as Male", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.get('input[type="radio"][value="m"]').click({ force: true });
      cy.get('input[type="radio"][value="m"]').should('be.checked');
    });
  });

  it("T9: should have all fields empty on page load", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.get("input[placeholder='Enter your full name']").should('have.value', '');
      cy.get('input[placeholder="Enter Rediffmail ID"]').should('have.value', '');
    });
  });

  it("T10: should check alternate email checkbox", () => {
    cy.origin('https://register.rediff.com', () => {
      cy.get('.nomargin').click({ force: true });
      cy.get('.nomargin').should('be.checked');
    });
  });

});
