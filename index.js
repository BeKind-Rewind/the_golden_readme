// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'name',
        type: 'input',
        message: 'What is your name?'
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What the email where you would like to be contacted?'
    }

];

// // TODO: Create a function to initialize app
const initQ = () => {
    return inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Title of project: (Required)',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter a title.');
                  return false;
                }
            }
        },
        {
            name: 'description',
            type: 'input',
            message: 'Describe this project: (Required)',
            validate: describeInput => {
                if (describeInput) {
                  return true;
                } else {
                  console.log('Please tell us something about this project.');
                  return false;
                }
            }
        }
    ])
    
    
};

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// // Function call to initialize app
initQ()
    .then(additionalQs)
    .then(readmeData => {
        const pageMD = generateReadme(readmeData);
        fs.writeToFile('./readme.md', pageMD, err => {
        if (err) throw new Error(err);

        console.log('README created! Check out README.md in this directory to see it!');
    });
    });
