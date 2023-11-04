import express from "express";
import bodyParser from "body-parser";
import https from "https";
import fs from "fs";
import exp from "constants";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>
{
    res.render("index.ejs");
})

app.get("/nearbyPharmacy",(req,res)=>
{
    res.render("pharmacy.ejs");
})

app.get("/nearbyHospital",(req,res)=>
{
    res.render("hospital.ejs");
})

app.get("/nearbyLabs",(req,res)=>
{
    res.render("labs.ejs");
})

app.get("/medicines",(req,res)=>{
    res.render("medicines.ejs");
})

app.get("/askDoc",(req,res)=>
{
    res.render("askdoc.ejs");
})


app.listen(3000,()=>{
    console.log(`Server is running on ${port}`);
})
