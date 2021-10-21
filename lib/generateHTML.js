// use a for loop to iterate through stored data
// call a function inside of template literal

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

function generateManagerCard (employee) {
    //pass in employee information and use html formatting to generate card
    // paste cards into here, add string template literals as needed 
    // test format of cards in html
}
employeeData.forEach((employee)=> {
    if(employee.getRole()=== 'Intern') {
        htmlArr.push(renderInternCard(employee))
    }
})


function masterFunction () {
    const htmlArr =[];
employeeData.forEach(employee => {
    // logic loop for each class of employee
    // activates the card function for each type of employee
    if (role === 'Manager'){
        generateManagerCard();
    }
    if (role === 'Engineer'){
        generateEngineerCard();
    }
    if (role === 'Intern'){
        generateInternCard();
    }
    
});

// create an array to hold employee card output
// join output array to get rid of commas in html

// master function with htmlArr
// master function has foreach loop
// for each loop logic to generate card
// end of master function returns completed HTML
// const htmlCards = htmlArr.join('')
// const completedHTML = rednerHTML(htmlCards)
// return completedHTMLPage;
// card functions are separate from master function