const Employee = require("./lib/Employee");
const Manager = require("../lib/ Manager");
const inquirer = require('inquirer');
const fs = require('fs');

describe("Manager role", () => {
    describe("getRole method", () => {
      it("returns manager as role", () => {
        const managerRole = new Manager("Vlad", 32, "vlad@impaler.com")
        expect(managerRole.getRole()).toBe("Manager");
    });
      });
  })