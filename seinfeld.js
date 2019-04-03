
var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "seinfeld"
});


connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  


  app.get("/", function(req,res)){
      connection.query("SELECT * FROM seinfeld", function(err, results){
          var html  = "<h1> Seinfeld Characters </h1>";

          html += "<ul>";

          
      })
  }