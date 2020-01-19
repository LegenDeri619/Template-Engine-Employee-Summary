const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const html = require("./templates/htmltemp");

const writeFile = util.promisify(fs.writeFile);

var teamArray = [];
var teamString = ``;

async function prompt() {
    var exitResponse = "";
     
    do {    
        try{    
            response = await inquirer.prompt([

                {
                        type: "input",
                        name: "name",
                        message: "Enter the employee's name: "
                },
                {
                        type: "input",
                        name: "id",
                        message: "Enter the employee's ID: "
                },
                {
                        type: "input",
                        name: "email",
                        message: "Enter the employee's email address: "
                },
                {
                        type: "list",
                        name: "role",
                        message: "What is the employee's role:",
                        choices: [
                            "Engineer",
                            "Intern",
                            "Manager"
                        ]
                }
            ]);

            var roleResponse = ""

            if (response.role === "Engineer") {
                roleResponse = await inquirer.prompt([{
                        type: "input",
                        name: "null",
                        message: "Enter employee's github username:",
                }]);

                const engineer = new Engineer(response.name, response.id, response.email, roleResponse.null);
                teamArray.push(engineer);

            } else if (response.role === "Intern") {
                roleResponse = await inquirer.prompt([{
                        type: "input",

                        name: "null",
                        message: "Enter the school the employee is attending:",
                }]);
                const intern = new Intern(response.name, response.id, response.email, roleResponse.null);
                teamArray.push(intern);
                
            } else if (response.role === "Manager") {
                roleResponse = await inquirer.prompt([{
                        type: "input",
                        name: "null",
                        message: "Enter the employee's office number:",
                }]);
                const manager = new Manager(response.name, response.id, response.email, roleResponse.null);
                teamArray.push(manager);
            }
        } catch (err) {
            return console.log(err);
        };
       
        exitResponse = await inquirer.prompt([{
            type: "list",
            name: "finish",
            message: "Do you want to enter another Employee? ",
            choices: [
                "Yes",
                "No"
            ]},
        ]);

     }while (exitResponse.finish === "Yes");
};

async function main() {
    try{
        await prompt();

        for (let i = 0; i < teamArray.length; i++) {
            
            teamString = teamString + html.generateCard(teamArray[i]);
        };

        var teamHTML = html.generateHTML(teamString);

        console.log(teamString);

        writeFile("./output/teamSheet.html", teamHTML);
    } catch (err) {
        return console.log(err);
    };
};

main();