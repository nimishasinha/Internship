const express = require("express");
const app = express();
const fs = require('fs');
const { Server } = require("http");

app.get("/",function(req,res){
      fs.readFile(__dirname + "/" + "users.json" , 'utf8' , function(err,data){

     
      console.log(data);
      res.send(data);
      });

})

//const server = app.listen(3000,function(req,res){
  //   const host= server.address().address
    // const port = server.address().port
     //console.log("server is running at 3000 port",host , port);

     app.listen(3000,function(req,res){
})