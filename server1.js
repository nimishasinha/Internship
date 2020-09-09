const express = require("express");
const app = express();
const fs = require('fs');


app.get("/goog", (req, res) => {
    res.status(301).redirect("https://www.google.com");
});

        app.listen(3000,function(req,res){
   })