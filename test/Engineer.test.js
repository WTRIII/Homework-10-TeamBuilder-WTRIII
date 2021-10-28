const Employee = require("./lib/Employee");
const Engineer = require("../lib/Engineer");
const inquirer = require('inquirer');
const fs = require('fs');

describe("Engineer class", () => {
    describe("getGitHub method", () => {
      it("displays engineer role", () => {
        const engieGit = new Engineer ("Vlad", 32, "vlad@impaler.com")
          expect(engieGit.getGitHub()).toBe(this.github);
        });
      });
  })
  describe("Engineer role", () => {
    describe("getRole method", () => {
      it("returns engineer as role", () => {
        const engineerRole = new Engineer("Vlad", 32, "vlad@impaler.com")
        expect(engineerRole.getRole()).toBe("Engineer");
    });
      });
  })
