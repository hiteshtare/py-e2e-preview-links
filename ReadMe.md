# master branch

## _Live Demo >> [Allure Reports using Cypress](https://vrt.yssofindia.org/e2e/py-e2e-preview-links/allure-report/#)_
  
### Run the Test suite for :  
- _[Test site](https://test.yssofindia.org/)_ - npm run test:staging
-  _[Live site](https://yssofindia.org/)_ - npm run test:release

Pending:

- https://stackoverflow.com/questions/50376630/allure-reports-to-see-historic-trends
cp -r allure-report/history allure-results/

- https://unix.stackexchange.com/questions/422392/delete-all-folders-inside-a-folder-except-one-with-specific-name
find ./allure-report -mindepth 1 ! -regex '^./allure-report/history\(/.*\)?' -delete && cp -r allure-report/history allure-results/

