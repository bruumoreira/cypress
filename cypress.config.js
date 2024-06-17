const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  "experimentalModuleVariables": true,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://127.0.0.1:5500/cypress/calculadora',
    testIsolation: false,
  },
});
