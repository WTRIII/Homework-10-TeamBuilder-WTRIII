// runs the application

// requirements
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const userInput = require('./src/userInput');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const init = () =>{
    userInput()
    .then((response) => fs.writeFileSync('./dist/team.html', userInput(response)))
    .then(() => console.log(chalk.green('Operation successful.')))
    .catch((err) => console.error(chalk.red(err)))
  }
  
  init();