const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

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
  ])
  .then((response) => {
    const gitlink = `https://github.com/${response.gitName}`
    const readme = `
# ${response.title}

[Description](#Description)  &nbsp; | &nbsp;  [Installation](#Installation)  &nbsp; | &nbsp;  [Usage](#Usage)  &nbsp; | &nbsp;  [Contributing](#Contributing)  &nbsp; | &nbsp;  [Tests](#Tests)  

#### license
![alt](https://img.shields.io/github/license/${response.gitName}/${response.projectName}?style=for-the-badge)

## Description

* ${response.description}

## Installation

* ${response.installation}

## Usage

* ${response.usage}

## Contributing

* ${response.contributing}

## Tests

* ${response.tests}

## Questions

Feel free to reach my other project on ${gitlink} 
Thank you for taking the time to review my project.  
If you have any problem please do not hesitate to contact me with ${response.email}.`

fs.writeFile('./README.md',readme, (err) => 
err ? console.error(err) : console.log('Commit logged!'))

  });














// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
