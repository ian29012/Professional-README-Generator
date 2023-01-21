const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("../utils/generateMarkdown.js");

// array of questions for user
inquirer.prompt([
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
        name: 'license',
    },
  ])
  .then((data) => {
// // function to write README file
  fs.writeFile('./README.md', generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success! ReadMe was generated!'));
});

// // function to initialize program
 function init() {
  if(fs.existsSync('./README.md')){
    inquirer.prompt([
      {
        type: 'list',
        choices: ['Apache License', 'MIT License', 'BSD 2-Clause “Simplified” License'],
        name: 'license',
      },

    fs.unlink('./image', (err) =>
      err ? console.error(err) : console.log('deleted!')
    )};
 }

// // function call to initialize program
 init();
