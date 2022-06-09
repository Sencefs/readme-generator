//Specify the required modules
let fs = require('fs');
let inquirer = require('inquirer');
//Link the page where the readme is created
let generateMarkdown = require('./Develop/utils/generateMarkdown.js');
//Array of questions for the user
let questions = [
    {
        type: "input",
        name: "title",
        message: "Give your project a name:",
        validate: titleInput => {
            if (titleInput) {
              return true;
            }
              else {
                  console.log("You must enter a name for your project");
              return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter project description:"
    },
    {
        type: "input",
        name: "link",
        message: "Enter Github project link:"
    },
    {
        type: "input",
        name: "install",
        message: "Enter project requirements:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage instructions here:"
    },
    {
        type: "input",
        name: "test",
        message: "Enter application demo link:"
    },
    {
        type: "input",
        name: "credits",
        message: "Enter collaborator usernames:"
    },
    {
        type: "input",
        name: "contributors",
        message: "What do others need to know about contributing to this repo?:"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your Github username:",
        validate: userInput => {
            if (userInput) {
              return true;
            }
              else {
                  console.log("You must enter your GitHub username");
              return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Email address:",
        validate: emailInput => {
            if (emailInput) {
              return true;
            }
              else {
                console.log("You must enter an email address");
              return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your repo",
        choices: ["GNU", "MIT"]  
    }
];
//Function to write the readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README has been developed and placed in the output folder")
    });
};
//Function to utilize inquirer to prompt questions to user then storing the readme file in the output folder
function init() {
    inquirer.prompt(questions)
    .then(data => {
        let readmeData = generateMarkdown(data);
        writeToFile('./output/README.md', readmeData);
    });
};
//Initialize program
init();

