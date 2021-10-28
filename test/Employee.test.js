const Employee = require("../lib/Employee");
const inquirer = require('inquirer');
const fs = require('fs');

describe("Employee class", () => {
  describe("getName method", () => {
    it("displays employee name", () => {
      const employeeName = new Employee ("Vlad", 32, "vlad@impaler.com")
        expect(employeeName.getName).toBe(this.name);
      });
    });
})
describe("Employee class", () => {
    describe("getID method", () => {
      it("returns employee ID", () => {
        const employeeID = new Employee("Vlad", 32, "vlad@impaler.com")
          expect(employeeID.getID()).toBe(this.id);
        });
      });
  })
  describe("Employee class", () => {
    describe("getEmail method", () => {
      it("returns employee email", () => {
        const employeeEmail = new Employee("Vlad", 32, "vlad@impaler.com")
        expect(employeeEmail.getEmail()).toBe(this.email);
    });
      });
  })
  describe("Employee role", () => {
    describe("getRole method", () => {
      it("returns employee role", () => {
        const employeeRole = new Employee("Vlad", 32, "vlad@impaler.com")
        expect(employeeRole.getRole()).toBe("Employee");
    });
      });
  })

