#!/usr/bin/env node 
//for global in which env who have to run;

let inputArray = process.argv.slice(2);// user input start from 2nd index;
const { dir } = require("console");
let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

// console.log(inputArray);
// node main.js tree "directoryPath"
//node main.js organize "directoryPath"
// node MediaDeviceInfo.js help function
// so in input array 1st index will be command like tree or organize and on 2nd index path with be there
let command = inputArray[0];
switch(command){
    case "tree" :
        treeFn(inputArray[1]);
        break;
    case "organize" :
        organizeFn(inputArray[1]);
        break;
    case "help" :
        helpFn();
        break;
    default:
        console.log("🥺🥺Please vhoose a right command");

} 

