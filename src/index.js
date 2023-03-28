utils = require("./utils.js");
math = require("./math.js");

let num1= parseFloat(process.argv[2]);
let num2 = parseFloat(process.argv[3]);

//using module.exports
let result = utils.add(num1,num2);
console.log(result);

//using exports 
let result2 = math.add(num1,num2);
console.log(result2);