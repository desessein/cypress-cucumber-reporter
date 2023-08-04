# Cypress-Cucumber Reporter

This project provides the boilerplate necessary to run Cypress in conjunction with Cucumber using the `@badeball/cypress-cucumber-preprocessor`. Additionally, it includes functionality for generating Cucumber HTML reports with the `multiple-cucumber-html-reporter`.

## Pipeline

1. **Generate Cucumber JSON**: Execute the `cypress:run` command to generate the Cucumber JSON files.
2. **Create Reports Folder**: Running `report:generate` will create the reports folder containing the `index.html` file that summarizes the results.
3. **Open the Report**: The `report:open` command will open the `index.html` file in your default browser, allowing you to view the report.
4. **Run All Steps Sequentially**: To execute all of these steps in sequence, simply run the command `npm run test`.

These scripts enable a smooth process for executing tests and viewing comprehensive reports, thereby aiding in the development and quality assurance of the application.
