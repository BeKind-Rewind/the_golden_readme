// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./develop/utils/generateMarkdown.js')




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
        },
        {
            name: 'title',
            type: 'input',
            message: 'Title of project:',
            
        },
        {
            name: 'description',
            type: 'input',
            message: 'Describe this project:',
            
        },
        {
            name: 'usage',
            type: 'input',
            message: 'Usage:',
            
        },
        {
            name: 'contributing',
            type: 'input',
            message: 'Contributors:',
            
        },
        {
            name: 'installation',
            type: 'input',
            message: 'How to install:',
            
        },
        {
            name: 'license',
            type: 'list',
            message: 'License?',
            choices: ["MIT", "GPL", "GNU"],
            
        }

    ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function initQ() {
    return inquirer.prompt(questions) 
        .then((answers) => {
            console.log(answers)
            return answers
        })
        .catch((error) => {
            console.log(error)
        })
}
// Function call to initialize app
initQ();