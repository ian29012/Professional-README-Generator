const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("../utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'gitName',
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'What is your Email address?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is your README title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your README description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is your README installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is your README usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is your README contribution guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What is your README test instructions?',
        name: 'tests',
    },
    {
        type: 'list',
        choices: ['Apache License', 'MIT License', 'BSD 2-Clause “Simplified” License'],
        message: 'Choose a license',
        name: 'license',
    }
  ]

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success! ReadMe was generated!'));
}

// // function to initialize program
 function init() {
  inquirer.prompt(questions)
    .then((response) => {
      writeToFile('./README.md' ,response)
      });
 }

// // function call to initialize program
 init();
