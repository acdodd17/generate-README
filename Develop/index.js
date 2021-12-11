// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions =  () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your name!");
                return false;
            }
        }
        }, 
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username? (Required)', 
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub Username!");
                    return false;
                }
            }
        },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)', 
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)', 
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description of your project!");
                return false;
            }
        }
    }, 
    
    ]
    )
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md',data, err => {
        if (err) {
        console.log(err);
         return;
        }
      console.log('Page created! Check out index.html in this directory to see it!');
  }
  )
};

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(answers => {
        console.log(answers)
    })
    .then(pageHTML => {
        return writeToFile(pageHTML);
    })
}

// Function call to initialize app
init();
