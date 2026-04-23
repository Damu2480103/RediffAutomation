const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    chromeWebSecurity: false,      // allows iframe access across origins
  pageLoadTimeout: 90000,        // 90s for slow pages
  defaultCommandTimeout: 10000,  // 10s default for all cy.get() commands
  viewportWidth: 1280,           // standard desktop width
  viewportHeight: 720,           // standard desktop height
  video: false,                  // set to true if you want test recordings
  screenshotOnRunFailure: true,
  // downloadsFolder: 'cypress/downloads',
  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/reports',
  //   overwrite: false,
  //   html: false,
  //   json: true},

    setupNodeEvents(on, config) {
      // node event listeners go here — leave empty for now
    },
  },
});