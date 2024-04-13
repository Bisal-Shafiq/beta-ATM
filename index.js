#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000; // Doller
let myPin = 123;
let myAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin:",
        type: "number",
    }
]);
// 123 === 1234 - false
if (myAnswer.pin === myPin) {
    console.log("Correst Pin Code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "pelect select option",
            type: "list",
            choices: ["withdraw", "check balance", "past cash"],
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your Amount:",
                type: "number",
            }
        ]);
        if (myBalance -= amountAns.amount) {
            myBalance <= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log(`insuficent balance. you can only withdaw up to ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAnswer.operation === "past cash") {
        let oeratortAns = await inquirer.prompt([
            {
                name: "operator",
                message: "Enter your Amount:",
                type: "list",
                choices: [10000, 20000, 30000],
            }
        ]);
        console.log("withdraw amounte successfully");
    }
}
else {
    console.log("Incorrect Pin Number");
}
