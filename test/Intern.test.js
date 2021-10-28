const Employee = require("./lib/Employee");
const Intern = require("../lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');

describe("Intern role", () => {
    describe("getRole method", () => {
      it("returns intern as role", () => {
        const internRole = new Intern("Vlad", 32, "vlad@impaler.com")
        expect(internRole.getRole()).toBe("Intern");
    });
      });
  })
  describe("Intern school", () => {
    describe("getSchool method", () => {
      it("returns intern as role", () => {
        const internSchool = new Intern("Vlad", 32, "vlad@impaler.com")
        expect(internSchool.getSchool()).toBe(this.school);
    });
      });
  })