// Package declarations needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// Connecting to template that incorporates user input with desired output, used to write new file
const generateMarkdown = require('./develop/utils/generateMarkdown.js')



// Array of questions for user input
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
            choices: ["MIT", "GPL", "GNU", "None"],
            
        }

    ];


function writeToFile (fileName, data){
    fs.writeFile(fileName, data, function(err) {
        if(err){
            console.log("Could not save")
        } else {
            console.log("Success: new README file generated inside current folder.")
        }
    })
}


// Function to initialize app
function init() {
    // returns the user input from the questions prompts
    return inquirer.prompt(questions) 
       
        .then((data) => {
            const sheet = generateMarkdown(data)
            // write to (new) README.md file
            writeToFile('README.md', sheet)
        })
        .catch((error) => {
            console.log(error)
        })
}




// Function call to initialize app
init();