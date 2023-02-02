import inquirer from "inquirer";
import fs from "fs";

const question = [
    {
        type: "input", 
        name: "title",
        message : "What is the title of your project?"
    },
    {
        type: "input", 
        name: "description",
        message : "Enter a brief description of your project:"
    }, 
    {
        type: "list", 
        name: "license",
        message : "choose a license for your project:",
        choices: [
            "Apache 2.0",
            "GPL 3.0 ",
            "MIT",
            "The unlicense"
        ]
    },


];

// const  mit = () =>{  return  42
// }


// const licenseFunc = (license) =>{
//     switch(license){
//         case "Apache 2.0" :
//             `![Github license](http:https://img.shields.io/badge/License-MIT-yellow.svg)`
//             `![Apache license website](https://www.apache.org/licenses/LICENSE-2.0)`

//             break;

//         case "MIT" :
//              mit()

//             break;

//         default:
//             "License warning"
            
        
//     }
// }

const a = `## https://axios-example.netlify.app/`

const licenseBadge = (license) => {
    if(license==="MIT"){
        return a
       ;
    }


}

const licenseLink = (license) => {
    if(license==="MIT"){
        return a
       ;
    }


}

inquirer.prompt(question).then(answers => {
    let readme = `
    # ${answers.title}

    ## Description
    ${answers.description}

    ## License
    This project sis licenced under the ${answers.license} license

    ## License Badge and Link:
    ${licenseBadge(answers.license)}
    ${licenseLink(answers.license)}
    
    
    
    `;

    fs.writeFile("README.md", readme , error => {
        if(error) throw error;
        console.log("README.md created successfuly")
    })
})