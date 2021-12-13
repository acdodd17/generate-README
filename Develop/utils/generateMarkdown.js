// Generate markdown for README
const generateMarkdown = answers => {
  return `
  # ${answers.title.toUpperCase()}
  [![License](https://img.shields.io/badge/License-${answers.license}-green)](https://choosealicense.com/licenses/${answers.license}/)

  ## Description
  ${answers.description}

  ---

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ---

  ## Installation 
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  This project is covered under the [${answers.license}](https://choosealicense.com/licenses/${answers.license}/) license.
  
  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  Questions? Contact me on GitHub or at the Email listed below!<br>
  GitHub: [${answers.github
		.trim()
		.toLowerCase()}](https://github.com/${answers.github.trim().toLowerCase()})<br>
  Email: ${answers.email}

  ---

  Generated with ❤ by ${answers.authorName}
`;
}

module.exports = generateMarkdown;
