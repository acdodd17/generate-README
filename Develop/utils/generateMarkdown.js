// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) {
    return '';
  }

  return `[This application is covered under the ${data.license} license](${renderLicenseLink})`

}

// Section for contributing guidelines 
const renderContributing = contributing => {
  if (contributing) {
    `If you wish to contribute to this project, please follow the guidelines outlined by the [Contributor Covenant](https://www.contributor-covenant.org/)`
  }
  else {
    `Reach out to the author for [Questions](#questions).`
  }
}
  

// TODO: Create a function to generate markdown for README
const generateMarkdown = answers => {
  return `
  # ${answers.title}
  ${renderLicenseBadge}

  ## Description
  ${answers.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#ssage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation 
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${renderLicenseSection}

  ## Contributing
  ${renderContributing}

  ## Tests
  ${answers.tests}

  ## Questions
  Contact the author with any questions!<br>
  Github link: [${answers.github
		.trim()
		.toLowerCase()}](https://github.com/${answers.github.trim().toLowerCase()})<br>
  Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
