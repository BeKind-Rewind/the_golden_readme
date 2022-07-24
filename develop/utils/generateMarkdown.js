// TODO: Create a function that returns a license badge based on which license is passed in
// https://img.shields.io/badge/license-MIT-blue
// 
// https://img.shields.io/badge/License-GNU%20GPL-blue
// 
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// Mozilla Public License: [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// GNU GPL v3 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
class markDown {
  static generateMarkdown(data) {
    return `
      # ${data.title}

      ## Table of Contents
      - [Project description](#Description)
      - [Usage](#Usage)
      - [Contributing](#Contributing)
      - [Installation](#Installation)
      - [Questions](#Questions)
      - [License](#License)

      ## Description
      ${data.description}

      ## Usage
      ${data.usage}

      ## Contributing
      ${data.contributing}

      ## Installation
      ${data.installation}

      ## Questions
      ${data.email}
      ${data.github}

      ## License
      ${data.license}





    `
  }
}

module.exports = markDown;
