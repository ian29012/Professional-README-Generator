// function to generate markdown for README
function generateMarkdown(response) {
  switch (response.license) {
    case 'Apache License' :
    var licensePNG = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    break;
    case 'MIT License' :
    var licensePNG = "https://img.shields.io/badge/License-MIT-yellow.svg";
    break;
    case 'BSD 2-Clause “Simplified” License' :
    var licensePNG = "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg";
    break;
    }
  gitlink = `https://github.com/${response.gitName}`;
  return `
# ${response.title}
  
## Table of Contents 
          
[Description](#Description)  &nbsp; | &nbsp;  [Installation](#Installation)  &nbsp; | &nbsp;  [Usage](#Usage)  &nbsp; | &nbsp;  [Contributing](#Contributing)  &nbsp; | &nbsp;  [Tests](#Tests)  
          
![alt](${licensePNG})
  
## Description
          
${response.description}
      
## Installation
      
${response.installation}
          
## Usage
      
${response.usage}
          
## Contributing
          
${response.contributing}
          
## Tests
          
${response.tests}
          
## license
  
The ${response.license} covers this application
          
## Questions
    
Thank you for taking the time to review my project. 
Please feel free to reach my other project on ${gitlink}   
If you have any problem please do not hesitate to contact me with ${response.email}.`

};

module.exports = generateMarkdown;
