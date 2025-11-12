const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.ts",
    env: {
      TAGS: "not @ignore",
    },
    async setupNodeEvents(on, config) {
      // initialize the cucumber preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      // configure bundler with esbuild plugin
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
  video: false,
  screenshotOnRunFailure: true,
});
