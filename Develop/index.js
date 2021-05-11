// TODO: Include packages needed for this application
// ADDED FS
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your location?",
    name: "location",
  },
  {
    type: "input",
    message: "Provide a brief bio of yourself:",
    name: "bio",
  },
  {
    type: "input",
    message: "Provide your LinkedIn URL:",
    name: "linkedIn",
  },
  {
    type: "input",
    message: "Provide your gitHub URL:",
    name: "gitHub",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const README = `test`;
  fs.writeFile("index.html", README, (err) =>
    err ? console.error(err) : console.log("Commit logged!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)

    .then((response) => {
      console.log(response);
      writeToFile(response);
    });
}

// Function call to initialize app
init();
