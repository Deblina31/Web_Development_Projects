import express from "express";
const app =express();
const PORT=3000;

app.get("/", (req,res)=>{
  res.send("This is Home Page");
})

app.get("/about", (req, res)=>{
  res.send("<h1>About Me </h1> <p>Hi! I am Deblina, I am learning Express JS </p>")
})

app.get("/contact", (req, res)=>{
  res.send("<h1>Contact Me</h1> <p>My Phone:- 1234567890 </p>")
})

app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`);
})
