function renderLicenseBadge(license) {
  if(license != "None"){
    const badges = {
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      MPL: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }    
    return badges[license]   
  } else {
    return '';
  }
};

// rendering the license link
function renderLicenseLink(license) {
    if(license != 'None'){
    const licenseLinks = {
      MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
      MPL: "[MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/)",
      GNU: "[GNU GPL v3](https://choosealicense.com/licenses/gpl-3.0/)"
    }
    return licenseLinks[license]
  } else {
    return '';
  }

};

function renderTableLink(license) {
    if(license != 'None'){
      return `
  - [License](#License)
      `
    } else {
      return '';
    }
};


  // TODO If there is no license, return an empty string
  //rendering the license link section
function renderLicenseSection(license){
    if(license != 'None'){
      return `
## License

Licensed under the ${renderLicenseLink(license)} license.`
    } else {
    return '';
    }
};

function generateMarkdown(data) {
    return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Installation](#Installation)
  - [Questions](#Questions)
${renderTableLink(data.license)}

## Description
${data.description}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Installation
${data.installation}

## Questions

Have questions?
You can find me on GitHub:
https://github.com/${data.github}

Or email me at:
${data.email}


${renderLicenseSection(data.license)}
    `
};


module.exports = generateMarkdown;
