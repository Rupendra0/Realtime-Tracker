require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();

//setup of socket.io for live tracking
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);  //this io will used to do further operations 

//connection to socket
io.on("connection" , function(socket){
    socket.on("send-location" , function(data){
        io.emit("receive-location" , {id : socket.id , ...data});
    })
    socket.on("disconnect" , function(){
        io.emit("user-disconnected" , socket.id);
    })
})


//view engine steup i.e. EJS
app.set("view engine" , "ejs");
app.use(express.static(__dirname + '/public'));


//routes
app.get("/" , function(req , res){
    res.render("index");
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server started at PORT : 3000");
})