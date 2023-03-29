// TODO: Include packages needed for this application

//import and config inquirer, process the answers, generate HTML file
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file     initially this said function writeToFile(name, data) {} but what is writeToFile???
const generateReadMe = function ( {title, projectDescription, installationInstructions, usageInformation, license, contributionGuidelines, testInstructions, githubUsername, emailAddress} ) {
    return `# ${title}
${license}
## Description
${projectDescription}
## Table of Contents
[Installation](#Installation)

[Usage](#Usage)

[Contributing](#Contribution)

[Tests](#Tests)

[Questions](#Questions)

[License](#License)

## Installation
${installationInstructions}

## Usage
${usageInformation}

## Contributing
${contributionGuidelines}

## Tests
${testInstructions}

## Questions
Here is a link to my github profile: https://github.com/${githubUsername}
And I can be reached via email at: ${emailAddress}

## License
This application is covered under the license: ${license}`
}
const licenseList = ['Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]', new inquirer.Separator(), 'GNU General Public License v3.0 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]', new inquirer.Separator(), 'MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]', new inquirer.Separator(), 'BSD 2-Clause "Simplified" License [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]', new inquirer.Separator(), 'BSD 3-Clause "New" or "Revised" License [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]', new inquirer.Separator(), 'Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]', new inquirer.Separator(), 'Creative Commons Zero v1.0 Universal [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]', new inquirer.Separator(), 'Eclipse Public License 2.0 [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]', new inquirer.Separator(), 'GNU Affero General Public License v3.0 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]', new inquirer.Separator(), 'GNU General Public License v2.0 [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]', new inquirer.Separator(), 'Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]', new inquirer.Separator(), 'The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]']
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Give a description of your project!',
            name: 'projectDescription',
        },
        {
            type: 'input',
            message: 'Write the installation instructions for your project!',
            name: 'installationInstructions',
        },
        {
            type: 'input',
            message: 'Now, write the usage information for your project!',
            name: 'usageInformation',
        },
        {
            type: 'list',
            message: 'Which license will your project use?',
            name: 'license',
            choices: licenseList,
        },
        {
            type: 'input',
            message: 'What are the guidelines for contributions for your project?',
            name: 'contributionGuidelines',
        },
        {
            type: 'input',
            message: 'What are the instructions for testing your project?',
            name: 'testInstructions',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubUsername',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'emailAddress',
        },
    ])

.then((answers) => {
    const readMePageContent = generateReadMe(answers);
    fs.writeFile('README.md', readMePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
});
