const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

//initial Employee prompt
const employeeQuestions = () => {
return inquirer.prompt([
    // need to look up how to create a user selection prompt
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?',
    },
    {
      type: 'input',
      message: 'What is the ID of this employee?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the email of this employee?',
      name: 'email',
    }
  ])
  .then((data) => {
    console.log(data);
    fs.writeFile("./dist/team.html", generateHtml(data), (err) =>
      err ? console.log(chalk.red(err)) : console.log(chalk.green('Success!'))
    );
  });
}


module.exports = employeeQuestions;




  //writes the HTML file
  function generateHtml(data) {
    return `
    <!doctype html>
    <html lang="en">
    <head> <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="style.css" rel=stylesheet>
    <title>Generate HTML Data</title>
    </head>
    <body> 
    <h1> Name: ${data.name}</h1>
    <h1> Employee ID: ${data.id}</h1>
    <h1> Email: ${data.email}</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="index.js"></script>
    </body>
  `;
  }