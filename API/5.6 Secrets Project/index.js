// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

const port=3000;
const app= express();

// 3. Use the public folder for static files.
app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res)=>{
    try{
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {user:response.data.username, secret:response.data.secret})
        
    }
    catch(error){
        res.json({message: "error occured"})
    }
})
// 6. Listen on your predefined port and start the server.


// 2. Create an express app and set the port number.
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}.`);    
})