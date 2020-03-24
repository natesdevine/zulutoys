var express = require('express');
var router = express.Router();
 
const fs = require('fs'); 
let read_json_file = () => {     
    let infile = './data/leapteam.json';     
    return fs.readFileSync(infile); 
}   
exports.list = function() {       
    return JSON.parse(read_json_file());    
}; 
 
exports.query_by_arg = (arg, value) => {     
    let json = JSON.parse(read_json_file());     
    // all addresses are stored in a "result" object     
    let result = json.result;     
    console.log("query by arg: " + arg + " " + value);     
    for (let x = 0; x < result.length; x++) {         
        let team = result[i];         
        if (team[arg] === value) {             
            return team;         
        }    
    }     
    return null; 
};