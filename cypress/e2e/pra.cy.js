

describe.skip("register user",()=>{
    it("register user with details",()=>{
        cy.visit("http://automationexercise.com");
        cy.contains('Home').should('be.visible');
        cy.contains('Signup / Login').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.get('input[data-qa=signup-name]').type("sumanth");
        cy.get('input[data-qa=signup-email]').type("dd@123");
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('Enter Account Information').should('be.visible');
        cy.get('#uniform-id_gender1').click();
        cy.get('[data-qa="name"]').type("sumanth");

cy.get('[data-qa="email"]')
  .should('have.value', 'dd@123')

        cy.get('#password', {force: true}).type("12345");

        cy.get('[data-qa="days"]').select('10');
        cy.get('[data-qa="months"]').select('May');
        cy.get('[data-qa="years"]').select('1990');
        cy.get('[name="newsletter"]').click();
        cy.get('[name="optin"]').click();
        cy.get('[data-qa="first_name"]').type("sumanth");
        cy.get('[data-qa="last_name"]').type("kumar");
        cy.get('[data-qa="company"]').type("abc");
        cy.get('[data-qa="address"]').type("xyz");
        cy.get('[data-qa="address2"]').type("pqr");
        cy.get('[data-qa="country"]').select('India');
        cy.get('[data-qa="state"]').type("telangana");
        cy.get('[data-qa="city"]').type("hyderabad");
        cy.get('[data-qa="zipcode"]').type("500001");
        cy.get('[data-qa="mobile_number"]').type("1234567890");
        cy.get('[data-qa="create-account"]').click();
        cy.contains('Account Created!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.contains('Logged in as').should('be.visible');
})
})



describe.skip("login user",()=>{
    it("login with valid credentials",()=>{
        cy.visit("http://automationexercise.com");  
        cy.contains('Home').should('be.visible');
        cy.contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type("dd@123");
        cy.get('[data-qa="login-password"]').type("12345");
        cy.get('[data-qa="login-button"]').click();
        cy.contains('Logged in as').should('be.visible');
        cy.contains('Delete Account').click();
        cy.contains('Your account has been permanently deleted!').should('be.visible');
      cy.get('[data-qa="continue-button"]').click();
        
    });
});

describe.skip("invalidlogin user",()=>{
    it("login with valid credentials",()=>{
        cy.visit("http://automationexercise.com");  
        cy.contains('Home').should('be.visible');
        cy.contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type("dd@123");
        cy.get('[data-qa="login-password"]').type("1235");
        cy.get('[data-qa="login-button"]').click();
        cy.contains('Your email or password is incorrect!').should('be.visible');
        
    });
});

describe.skip("logout user",()=>{
    it("login with valid credentials",()=>{
        cy.visit("http://automationexercise.com");  
        cy.contains('Home').should('be.visible');
        cy.contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('[data-qa="login-email"]').type("dd@123");
        cy.get('[data-qa="login-password"]').type("12345");
        cy.get('[data-qa="login-button"]').click();
        cy.contains('Logged in as').should('be.visible');
        cy.contains('Logout').click();
        cy.contains('Signup / Login').should('be.visible');
        
        
    });
});
  
describe.skip("vdvv",()=>{

it("Edsd",()=>{



cy.visit('https://automationexercise.com')

cy.contains('Home').should('be.visible')

// Better selector
cy.contains('Contact us').click()

cy.contains('Get In Touch').should('be.visible')

cy.get('[data-qa="name"]').type('damu')
cy.get('[data-qa="email"]').type('damu123@gmail.com')
cy.get('[data-qa="subject"]').type('sffsdf')
cy.get('[data-qa="message"]').type('sfevrveefe')

// ✅ File Upload (FIXED)
cy.get('[name="upload_file"]')
  .selectFile('cypress/fixtures/example.json')

cy.get('[data-qa="submit-button"]').click()

cy.contains('Success! Your details have been submitted successfully.')
  .should('be.visible')
});
});


describe.skip("verify Test Cases page",()=>{
    it("Test Cases",()=>{
        cy.visit("http://automationexercise.com");
        cy.contains('Home').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        cy.contains("Test Cases").should('be.visible')

    });
});

describe.only('View Product Details', () => {

  it('Verify all products and product detail page', () => {

    // 1 & 2. Launch browser and navigate to URL
    cy.visit('https://automationexercise.com')

    // 3. Verify home page is visible
    cy.contains('Home').should('be.visible')

    // 4. Click on 'Products' button
    cy.contains('Products').click()

    // 5. Verify user navigated to ALL PRODUCTS page
    cy.url().should('include', '/products')
    cy.contains('All Products').should('be.visible')

    // 6. Verify products list is visible
    cy.get('.features_items').should('be.visible')

    // 7. Click on 'View Product' of first product
    cy.get('.features_items .product-image-wrapper')
      .first()
      .contains('View Product')
      .click()

    // 8. Verify user is landed on product detail page
    cy.url().should('include', '/product_details')

    // 9. Verify product details are visible
    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible')                    // Product name
      cy.contains('Category').should('be.visible')        // Category
      cy.contains('Rs.').should('be.visible')              // Price
      cy.contains('Availability').should('be.visible')    // Availability
      cy.contains('Condition').should('be.visible')       // Condition
      cy.contains('Brand').should('be.visible')            // Brand
    })

  })

})

