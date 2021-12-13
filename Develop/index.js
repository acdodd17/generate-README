// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { title } = require('process');

// Array of questions for user input
const questions =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'authorName',
            message: 'What is your name? (Required)',
            validate: authorName => {
                if (authorName) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
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
            type: 'list',
            name: 'license',
            message: 'Choose a license (Required)',
            choices: ['Apache', 'MIT', 'GNU', 'ISC', 'Mozilla'],
            validate: projectLicense=> {
                if(projectLicense) {
                    return true;   
                } else {
                    console.log('Please choose a license option for your project!')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Write in any guidelines for others to contirubute to your project?',
            validate: contributing => {
                if(contributing) {
                    return true;   
                } else {
                    console.log('Please enter guidelines for contribution!')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List any tests you have written for your application and provide examples on how to run them.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username. (Required)',
            validate: githubUsername => {
                if(githubUsername) {
                    return true;   
                } else {
                    console.log('Please enter your GitHub username!')
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


// Initialize app
const init = () => {
    questions()
    .then (answers => {
        console.log(answers);
        const fileData = generateMarkdown(answers)
        fs.writeFile(`./${answers.title}.md`, fileData, (err) => {
        
            if (err) {
                console.log(err)
            }
            console.log('Your README has been created!')
        })
    })
    .catch(err => {
        console.log(err);
    });
};

init();
