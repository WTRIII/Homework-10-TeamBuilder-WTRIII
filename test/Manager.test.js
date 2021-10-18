const Employee = require("./lib/Employee");
const Manager = require("./lib/ Manager");
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
