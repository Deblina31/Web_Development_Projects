import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "princessrosie315";
const yourPassword = "12345";
const yourAPIKey = "7f77b2aa-dc62-4f06-8f0f-0f78816d3549";
const yourBearerToken = "b101a796-f558-4361-97da-8ae4fff6cf78";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
    const randomEndpoint= await axios.get(API_URL+"random");
    res.render("index.ejs", {content:randomEndpoint.data.secret})   
  }
  catch(error){
    console.log("error !!");
    
  }
});

app.get("/basicAuth", async (req, res) => {
  
const response = await axios.get(API_URL+"all?page=2", {
    auth: {
        username: 'princessrosie315',
        password: '12345'
    }
})

res.render("index.ejs", { content: JSON.stringify(response.data) });
});

//TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "filter?score>=5&apiKey=" + yourAPIKey);
    const result = response.data;

    res.render("index.ejs", { content: JSON.stringify(result) });

  } catch (error) {
    console.error(error.message);
    res.render("index.ejs", { content: "Error fetching data" });
  }
});

app.get("/bearerToken", async (req, res) => {
  
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  
  const response= await axios.get(API_URL+"secrets/42", {
    headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    },
  });
 ; 
  res.render("index.ejs", {content:JSON.stringify(response.data.secret)});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
