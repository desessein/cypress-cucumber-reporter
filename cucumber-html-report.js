/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const report = require('multiple-cucumber-html-reporter')

report.generate({
  jsonDir: 'json-logs/',  // ** Path of .json file **//
  reportPath: './reports/cucumber-htmlreport.html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '81',
    },
    device: 'Local test machine',
    platform: {
      name: 'mac',
      version: 'Catalina',
    },
  },
})