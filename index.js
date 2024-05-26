#! /usr/bin/env node
import inquirer from "inquirer";
const counter = await inquirer.prompt([
    {
        name: "paragraph",
        type: "string",
        message: "Enter you paragraph"
    }
]);
let result = counter.paragraph.trim().split(" ");
console.log(result);
console.log(result.length);
