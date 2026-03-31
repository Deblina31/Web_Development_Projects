const express= require ("express");
const bodyparser= require("body-parser");

const port=3000;
const app= express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

io.on('connection', socket => {
  socket.on('reply', (msg) => { console.log(msg);
   
   io.emit("chat message", msg);

   }); // listen to the event
});

server.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
    
})