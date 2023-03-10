// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Returns the license link
function renderLicenseLink(license) {
  if (license.includes('MIT'))
  {
    return `https://mit-license.org/`
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data.username = "https://github.com/" + data.username;
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Description
  ${data.description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Credits](#credits)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.licenses)}

  ## Contributing
  ${data.contributors}

  ## Test
  ${data.test}


  ## Questions
  Should you have any questions or concerns about this repo, feel free to launch an issue or email me at 
  ${data.email}. To see more of my projects, visit ${data.username}.
  
  `;
}
module.exports = generateMarkdown;
