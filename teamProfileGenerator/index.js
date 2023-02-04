const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const genereateSite = require('./src/generate-site.js');
const fs = require('fs');
const path = require("path");
const teamMembers = [];

const mainMenu = () => {
  inquirer.prompt({
    type: 'list',
    name: 'type',
    message: 'Select the Employee type:',
    choices: ["manager", "engineer", "intern", "build team"]
  }).then(function (answer) {
    if (answer.type === "manager") {
      //ask manager question
      askManager();
    }
    else if (answer.type === "engineer") {
      //ask engineer question
      askEngineer();
    }
    else if (answer.type === "intern") {
      //ask intern question
      askIntern();
    }
    else {
      //build html page with team
      fs.writeFileSync(path.join(__dirname, "/dist/", "team.html"), genereateSite(teamMembers))
    }
  })
}
//manager question prompt
const askManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email?',
    },
    {
      type: 'input',
      name: 'officenumber',
      message: 'What is the office number?',
    }
  ]).then(function (answers) {
    console.log(answers)
    const e = new Manager(answers.name, answers.id, answers.email, answers.officenumber);
    teamMembers.push(e);
    mainMenu();
  })
}

//engineer question prompt
const askEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the GitHub?',
    }
  ]).then(function (answers) {
    console.log(answers)
    const e = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(e);
    mainMenu();
  })
}
//intern question prompt
const askIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the school?',
    }
  ]).then(function (answers) {
    console.log(answers)
    const e = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(e);
    mainMenu();
  })
}

mainMenu();