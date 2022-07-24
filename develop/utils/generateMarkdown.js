// Generates markdown for README
class markDown {
  
  // rendering the license badge
  static renderLicenseBadge(license) {
    const badges = {
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      MPL: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }    
    return badges[license] 
  }

  // rendering the license link
  static renderLicenseLink(license) {
    const licenseLinks = {
      MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
      MPL: "[MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/)",
      GNU: "[GNU GPL v3](https://choosealicense.com/licenses/gpl-3.0/)"
    }
    return licenseLinks[license]
  }

  // TODO If there is no license, return an empty string
  //rendering the license link section
  static renderLicenseSection(license){
    if(license){
      return `Licensed under the ${this.renderLicenseLink(license)} license.`
    } else {
    return ''
    }
  }

  static generateMarkdown(data) {
    return `
# ${data.title}

${this.renderLicenseBadge(data.license)}

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
${data.github}

${data.email}

## License
${this.renderLicenseSection(data.license)}
    `
  }
}

module.exports = markDown;
