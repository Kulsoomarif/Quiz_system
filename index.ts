#! /usr/bin/end node

import inquirer from "inquirer"
import chalk from "chalk"
import figlet from "figlet"

console.log (chalk.blue(figlet.textSync("Quiz System Project")));

const quiz: {
    q_1:string;
    q_2:string;
    q_3:string;
    q_4:string;
    q_5:string;
}
= await inquirer.prompt([{
    name:"q_1",
    type:"list",
    message: "Q1:Which is the capital city of sindh?",
    Choices: ["Karachi","Islamabad","peshawar","Quetta","Lahore"]
},
{
    name: "q_2",
    type: "list",
    message: "Q2:Which is the capital city of Khyber pukhtoonkhwa?",
    Choices: ["Peshawar","Quetta","Karachi","Lahore","Islamabad"]
},
{
    name: "q_3",
    type: "list",
    message: "Q3:Which is the capital city of Punjab?",
    Choices: ["Karachi","Lahore","Peshawar","Quetta","Islamabad"]
},
{
    name:"q_4",
    type:"list",
    message: "Q4:Which is the capital city of Balochistan?",
    Choices: ["Lahore","Islamabad","Peshawar","Quetta","Karachi"]
},
{
    name: "q_5",
    type: "list",
    message: "Q5:Which is the capital city of Pakistan?",
    Choices: ["Karachi","Lahore","Islamabad","Peshawar","Quetta"]
}
]);

let score:number=0;

switch(quiz.q_1){
    case "Karachi":
        console.log(chalk.yellow("1.Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.blue("1.Incorrect!"));
}
switch(quiz.q_2){
    case "Peshawar":
        console.log(chalk.yellow("2.Correct!"));
        ++score;
        break;
        default:
                console.log(chalk.blue("2.Incorrect!"));
}
switch(quiz.q_3){
    case "Lahore":
        console.log(chalk.yellow("3.Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.blue("3.Incorrect!"));
}
switch(quiz.q_4){
    case "Quetta":
        console.log(chalk.yellow("4.Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.blue("4.Incorrect!"));
}
 switch(quiz.q_5){
      case "Islamabad":
             console.log(chalk.yellow("5.Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.blue("5.Incorrect!"));
}
console.log(`score ${score}`);
