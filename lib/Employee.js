const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    };

    getName() {
      console.log(chalk.green(this.name));
    };

    getID() {
      console.log(chalk.blue(this.id));
    };

    getEmail() {
      console.log(chalk.yellow(this.email));
    };

    getRole(){
      if(Employee){
        console.log(`Role = Employee`);
      } else if (Manager){
        console.log(`Role = Manager`);
      } else if (Engineer){
        console.log(`Role = Engineer`);
      } else if (Intern){
        console.log(`Role = Intern`);
      } else{
        console.log(chalk.red(`This employee has no role assigned.`))
      }
    };
}

  module.exports = Employee;

//     processProductSale(name) {
//       this.stock.forEach((item) => {
//         if (item.name === name) {
//           if (item.count > 0) {
//             // TODO: Decrement the store's stock of item
//             item.count --;
//             // TODO: Increase the store's revenue
//             this.revenue += item.price;
//             console.log(`Purchased ${item.name} for ${item.price}`);
//           } else {
//             console.log(`Sorry, ${item.name} is out of stock!`);
//           }
//         }
//       });
//     }
  
//     replenishStock(name, count) {
//       this.stock.forEach((item) => {
//         if (item.name === name) {
//           // TODO: Increase the store's stock of item
//           item.count += count;
//           console.log(`Replenished ${item.name} by ${item.count}`);
//         }
//       });
//     }
  
//     printRevenue() {
//       console.log(`The revenue so far is ${this.revenue}`);
//     }
  
//     welcome() {
//       console.log(`Welcome to ${this.name}!`);
//     }
  
//   module.exports = Store;
  