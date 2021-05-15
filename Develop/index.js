// TODO: Include packages needed for this application
// ADDED FS
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project Title: ",
    name: "title",
  },
  {
    type: "input",
    message: "Description: ",
    name: "description",
  },
  {
    type: "input",
    message: "Why did you build this product? ",
    name: "descriptionWhy",
  },
  {
    type: "input",
    message: "What problem did it solve? ",
    name: "descriptionProblem",
  },
  {
    type: "input",
    message: "Installation Instructions: ",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage Information: ",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution Guidelines:",
    name: "contributing",
  },
  {
    type: "input",
    message: "Test Instructions: ",
    name: "tests",
  },
  {
    type: "list",
    message: "Please choose a license: ",
    name: "license",
    choices: ["None", "MIT", "Unlicense"],
  },
  {
    type: "input",
    message: "Please provide your GitHub username: ",
    name: "gitHub",
  },
  {
    type: "input",
    message: "Please provide your email: ",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)

    .then((data) => {
      console.log(data);
      writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
