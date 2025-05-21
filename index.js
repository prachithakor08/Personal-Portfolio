const express = require("express");
const app = express();
const path = require("path");


app.use(express.static('public')); 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//Home route
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.listen("8080",()=>{
    console.log("Connected to port 8080");
});

app.get("/about",(req,res)=>{
    res.render("about.ejs");
});

app.get("/skills",(req,res)=>{
    res.render("skills.ejs");
});

app.get("/projects",(req,res)=>{
    res.render("projects.ejs");
});

app.get("/resume",(req,res)=>{
    res.render("resume.ejs");
});