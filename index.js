// Package declarations needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// Connecting to template that incorporates user input with desired output, used to write new file
const markDown = require('./develop/utils/generateMarkdown.js')



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
            choices: ["MIT", "GPL", "GNU"],
            
        }

    ];



// Function to initialize app
function initQ() {
    // returns the user input from the questions prompts
    return inquirer.prompt(questions) 
        // then it takes that returned data, runs it through function (to use it) with the markdown template information 
        // in order to compile all the information dynamically into the desired output (which sets us up to be able to write to file)
        .then((data) => {
            const sheet = markDown.generateMarkdown(data)
            // write to (new) README.md file
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