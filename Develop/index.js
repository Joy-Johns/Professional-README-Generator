// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const markDown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown.js");
let filename = `Readme.md`;
// TODO: Create an array of questions for user input
const questions = [
    {type:"input", name:"username", message:"What is your GitHub username? "},
    {type:"input", name:"email", message:"What is your email address? "},
    {type:"input", name:"title", message:"What is your project's name? "},
    {type:"input", name:"description", message:"Please write a short description of your project. "},
    {type:"checkbox", name:"licenses", message:"What kind of license should your project have? ", choices:["MIT"]},
    {type:"input", name:"installation", message:"What command should be run to install dependencies? "},
    {type:"input", name:"test", message:"What command should be run to run tests? "},
    {type:"input", name:"usage", message:"What does the user need to know about using the repo? "},
    {type:"input", name:"contributors", message:"What does the user need to know about contributing to the repo? "},


];

// TODO: Create a function to write README file
const writeToFile = data => {
//writing on the file whatever is passed through the generateMarkdown
    fs.writeFile(filename, data, 
        (err) =>
        err ? console.log(err) 
        : console.log('Success!')  
);}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app

init()
.then(userInput => {
    filename = userInput.username + ".md";
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
});
