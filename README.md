# Cypress Typescript Cucumber

## This project is based on some test scenarios made for a code challenge

To download this project dependencies just run the command below on your terminal:
``` 
npm install 
```
To run the tests with Cypress in window mode you can run:
``` 
npx cypress open 
```
To run the tests with Cypress in headless mode, just use the command:
``` 
npx cypress run
```
The project is divided in:

**Cypress**<br />
    **- Downloads:** Any files downloaded while testing an application's file download feature will be stored in the downloadsFolder which is set to cypress/downloads by default.<br />
    **- Fixtures:** Fixtures are used as external pieces of static data that can be used by your tests. Fixture files are located in cypress/fixtures by default, but can be configured to another directory.<br />
    **- e2e:** In this folder is where the test scripts are. Here we have the files (spec.js) that are going to run when the test begins.<br />
    **- features:** It's here where the scenarios are documented and described using natural language (Gherkin).<br />
    **- steps:** Here the scenarios are really implemented, and they are called on multiple places and very well separated from the code itself.<br />
    **- pages:** Folder where the selectors are placed, so they can be reused anywehre in the code.<br />
    **- Support:** The support file is a great place to put reusable behavior such as custom commands or global overrides that you want applied and available to all of your spec files. This file runs before every single spec file.<br />

    
