// Renders the link to the license of choice
function renderLicenseBadge(license) {
  if(license != "None"){
    const badges = {
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)",
      MPL: "[![License: MPL](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://choosealicense.com/licenses/mpl-2.0/)",
      GNU: "[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)"
    }    
    return badges[license]   
  } else {
    return '';
  }
};

// Renders the link to the license of choice
function renderLicenseLink(license) {
    if(license != 'None'){
    const licenseLinks = {
      MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
      MPL: "[MPL](https://choosealicense.com/licenses/mpl-2.0/)",
      GNU: "[GNU](https://choosealicense.com/licenses/gpl-3.0/)"
    }
    return licenseLinks[license]
  } else {
    return '';
  }

};

function renderTableLink(license) {
    if(license != 'None'){
      return `
  - [License](#license)
      `
    } else {
      return '';
    }
};




// Renders the license chosen into a section in the README, or if 'None' leaves it out
function renderLicenseSection(license){
    if(license != 'None'){
      return `## License

Licensed under the ${renderLicenseLink(license)} license.`
    } else {
    return '';
    }
};


// Generates the main body of the markdown sheet
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
  - [Usage](#usage)
  - [Tests](#tests)
  - [Installation](#installation)
  - [Screenshots and Video](#screenshots_video)
  - [Contributing](#contributing)
  - [Questions](#questions)
${renderTableLink(data.license)}


## Usage
${data.usage}



## Tests
${data.tests}



## Installation
${data.installation}


## Screenshots and Video
${data.screenshots_video}
![Alt Text](./images/screenshot.png)



## Contributing
${data.contributing}



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
