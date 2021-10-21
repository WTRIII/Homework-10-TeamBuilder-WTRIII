
//writes the HTML file
function masterFunction (employeeData) {

    const htmlArr =[];

    employeeData.forEach(employee => {
    if (employee.getRole() === 'Manager'){
        htmlArr.push(generateManagerCard(employee));
    }
    if (employee.getRole() === 'Engineer'){
        htmlArr.push(generateEngineerCard(employee));
    }
    if (employee.getRole() === 'Intern'){
        htmlArr.push(generateInternCard(employee));
    }
    
});
    const htmlCards = htmlArr.join('');
    const completedHtml = generateHtml(htmlCards);
    return completedHtml;

}

function generateManagerCard (employee) {
    // pass in employee information and use html formatting to generate card
    // paste cards into here, add string template literals as needed 
    // test format of cards in html
return `
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Name: ${employee.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employee.id}</li>
    <li class="list-group-item">Email: ${employee.email}</li>
    <li class="list-group-item">Office #: ${employee.officeNumber}</li>
  </ul>
</div>
`
}

function generateEngineerCard (employee) {
    // pass in employee information and use html formatting to generate card
    // paste cards into here, add string template literals as needed 
    // test format of cards in html
return `
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Name: ${employee.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employee.id}</li>
    <li class="list-group-item">Email: ${employee.email}</li>
    <li class="list-group-item">GitHub: ${employee.github}</li>
  </ul>
</div>
`
}

function generateInternCard (employee) {
    // pass in employee information and use html formatting to generate card
    // paste cards into here, add string template literals as needed 
    // test format of cards in html
return `
<div class="card" style="width: 18rem;">
  <div class="card-header">
    Name: ${employee.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employee.id}</li>
    <li class="list-group-item">Email: ${employee.email}</li>
    <li class="list-group-item">School: ${employee.school}</li>
  </ul>
</div>
`
}

function generateHtml(htmlCards) {
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
      ${htmlCards}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      <script src="index.js"></script>
      </body>
   `;
}

module.exports = masterFunction;
