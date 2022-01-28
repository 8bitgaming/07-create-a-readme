// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('../Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
answers = []
const promptUser = async () => {

    const readmeData = await inquirer.prompt(
        [{
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?(Required)',
            validate: nameInput_1 => {
                if (nameInput_1) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide testing instructions:',
        }
        ]);
    answers.push(readmeData);
    console.log(answers);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {
    
// }

// Function call to initialize app
// init();
promptUser()
