const fs=require("fs");

fs.writeFile("message.txt", "Hello from NodeJS", function(err){
    if(err) throw err;
    console.log("File is saved.");
})

fs.readFile("message.txt", "utf8", function(err,data){
    if(err) throw err;
    console.log(data);
})