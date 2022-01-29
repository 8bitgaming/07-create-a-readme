// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('../Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
let answers = []
const promptUser = () => {

    return inquirer.prompt(
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
            name: 'credits',
            message: 'List any contributors or third-party assets you wish to mention.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license type if you wish to include one. Arrow keys to move, Enter to select:',
            choices: ['None', 'MIT', 'GNU GPLv3', 'Mozilla Public 2.0', 'The Unlicense', 'Apache 2.0']
        },
        {
            type: 'confirm',
            name: 'contributor',
            message: 'Would you like others to contribute to your project?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide testing instructions:',
        },
        ])
        ;
  };


// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./README.md', JSON.stringify(answers), err => {
        if (err) {
          reject(err);
          return;
        }
          resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  }; 

// initialize the app
const init = () => {
    promptUser(answer => answers.push(answer))
    .then(console.log(answers))
    .then(generateMarkdown(answers))
    .then(writeToFile())
}


// Function call to initialize app
init();

