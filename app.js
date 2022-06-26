//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items=[];
var workitems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/", function(req, res){
  var today=new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long",
  } 
var day=today.toLocaleDateString("en-us",options)

  res.render("index",{kindofday:day,listitem:items,place:"/"});
});
app.post("/",function(req,res){
 items.push(req.body.newItem); 
res.redirect("/");
})
app.get("/work",function(req,res){
  res.render("index",{kindofday:"work list",listitem:workitems,place:"/work"})
})
app.post("/work",function(req,res){
 workitems.push(req.body.newItem);
res.redirect("/work");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
