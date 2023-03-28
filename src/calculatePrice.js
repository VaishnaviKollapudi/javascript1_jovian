
calculator = require('./commerce.js');
fs = require('fs');
path = require('path');

let outputFileName = path.join('.',process.argv[2]);
console.log(outputFileName);
if(fs.existsSync("./cart.json")){
    const cart_data = JSON.parse(fs.readFileSync("./cart.json"));
    let result= calculator.calculatePrice(cart_data,process.argv[3]);
    fs.writeFileSync(outputFileName, JSON.stringify(result));
    console.log(result);
}else{
    console.log("cart.json not found");
}

