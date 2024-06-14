import { defineConfig } from "cypress";
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    watchForFileChanges: true,
    defaultCommandTimeout: 10000,
    video: true,
    baseUrl: 'https://test.yssofindia.org/',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
