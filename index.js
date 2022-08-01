// TODO: Include packages needed for this application
// const fs = require('fs/promises');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input"
        message: "What is your Project Title?"
        name: "title"
    },
    {
        type: "input"
        message: "something"
        name: "something"
    }
];

inquirer
    .prompt(questions)
    .then((data) => { 
        console.log(data);
    })
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
