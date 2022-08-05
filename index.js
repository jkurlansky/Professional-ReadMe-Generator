const fs = require("fs/promises");
const inquirer = require("inquirer");

const templateGenerator = ({ title, description, installation, usage, contribution, testinfo, username, giturl, license}) => {
return `
# ${title}

![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test Instructions](#test)
- [Questions](#questions)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Test Instructions
${testinfo}

## Questions
Have any questions? Please contact out to me:
${username}
${giturl}

`};
// // TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Project Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Explain your project and what it does",
        name: "description"
    },
    {
        type: "input",
        message: "Include an installation step",
        name: "installation"
    },
    {
        type: "input",
        message: "Include an installation step",
        name: "installation"
    },
    {
        type: "input",
        message: "Add your usage information",
        name: "usage"
    },
    {
        type: "input",
        message: "Explain your contribution guidelines",
        name: "contribution"
    },
    {
        type: "input",
        message: "Add your test instructions",
        name: "testinfo",
        default: "npm start"
    },
    {
        type: "input",
        message: "Enter your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your GitHub URL",
        name: "giturl"
    },
    {
        type: "list",
        message: "Choose a license",
        name: "license",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
    },
];

inquirer
    .prompt(questions)
    .then((data) => { 
        fs.writeFile("readmetest.md", templateGenerator(data))
        .then(() => console.log("success"))
        .catch((e) => console.log(e));
    });
