fs = require('fs');

fs.readFileSync("./testFile.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File read success");
        console.log(data);
    }
});

fs.writeFile("./testFile.txt","Hello World!!",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Data written successfully");
        console.log("The content of the file are:");
        console.log(fs.readFileSync("./testFile.txt", "utf8"));
    }
});
