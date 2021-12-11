// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if(license === 'Apache'){
    return 
  } 
  else if (license === 'GNU') {
    return 
  }
  else if (license === 'MIT') {
    return 
  }
  else if (license === 'ISC') {
    return 
  }
  else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if(license === 'Apache'){
    return 
  } 
  else if (license === 'GNU') {
    return 
  }
  else if (license === 'MIT') {
    return 
  }
  else if (license === 'ISC') {
    return 
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) {
    return '';
  }

  return `[This application is covered under the ${data.license} license](${renderLicenseLink})`

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  ${renderLicenseBadge}
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#ssage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
