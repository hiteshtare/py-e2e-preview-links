import { defineConfig } from "cypress";
import allureWriter from '@shelex/cypress-allure-plugin/writer';
import fs from 'fs';

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    video: true,
    baseUrl: 'https://test.yssofindia.org/',
    setupNodeEvents(on, config) {
      // // implement node event listeners here
      // const environmentName = config.env.environmentName || 'staging';
      // const environmentFilename = `./env/${environmentName}.settings.json`;
      // console.warn('loading %s', environmentFilename);
      // const settings = require(environmentFilename);
      // if (settings.baseUrl) {
      //   config.baseUrl = settings.baseUrl;
      // }
      // if (settings.env) {
      //   config.env = {
      //     ...config.env,
      //     ...settings.env,
      //   };
      // }
      // console.log('loaded settings for environment %s', environmentName)
    
      // IMPORTANT: return the updated config object
      // for Cypress to use it
      allureWriter(on, config);
      // on('after:run', (results) => {
      //   const data = `Environment=${environmentName}\nBaseURL=${settings.baseUrl}\n`
      //   fs.writeFile('allure-results/environment.properties', data, (err) => {
      //     if (err) throw err;
      //   });
      // })
      return config;
    },
  },
});
