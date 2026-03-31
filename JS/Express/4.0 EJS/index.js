import express from "express";

const app=express();
const port=3000;

let now = new Date();
let day= now.getDay(); //0
let d="", advice="";

if(day === 0 || day === 6){
    d="Week End";
    advice="Have some Fun!";
}
else{
    d="Week day";
    advice="Time to Work Hard.";
}
app.get("/", (req, res)=>{
    
    res.render("index.ejs",{today:d, adv:advice});
    //console.log(new Date());       // Day of week (0–6)
})

app.listen(port, (req, res)=>{
    console.log(`Server is running on ${port}`);
})