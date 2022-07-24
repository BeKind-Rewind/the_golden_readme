// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./develop/utils/generateMarkdown.js')




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
            message: 'What is the email where you would like to be contacted?'
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
        .then((data) => {
            const sheet = markDown.generateMarkdown(data)
            fs.writeFile('README.md', sheet, function(err) {
                if(err){
                    console.log("Could not save")
                } else {
                    console.log("Success: new README file generated inside current folder.")
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })
}
// Function call to initialize app
initQ();