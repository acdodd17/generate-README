// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe you project (HINT: answer what, why and how!). (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a step by step description of how to get the development environemnt running. (Required)',
            validate: projectInstallation => {
                if (projectInstallation) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (Required)',
            validate: projectUsage => {
                if(projectUsage) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples for use!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators with links to their GitHub profiles. (Required)',
            validate: projectCredits => {
                if(projectCredits) {
                    return true;
                } else {
                    console.log('Please provide a list of your collaborators and links to their GitHub profiles!');
                } return false;
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to provide examples of tests you have written for your application?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List any tests you have written for your application and provide examples on how to run them. (Required)',
            when: ({ confirmTests }) => confirmTests
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license (Required)',
            choices: ['Apache', 'GNU', 'MIT', 'ISC'],
            validate: projectLicense=> {
                if(projectLicense) {
                    return true;   
                } else {
                    console.log('Please choose a License for your project!')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username. (Required)',
            validate: githubUsername => {
                if(githubUsername) {
                    return true;   
                } else {
                    console.log('Please enter your Github username!')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter a valid email address. (Required)',
            validate: userEmail => {
                if(userEmail) {
                    return true;
                } else {
                    console.log('Please provide a valid email address!')
                } return false;
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
};

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(answers => {
    writeToFile('./dist/README.md', answers);
    });
};

// Function call to initialize app
init();
