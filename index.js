const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//Home route
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.listen("3000",()=>{
    console.log("Connected to port 3000");
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