// (ctrl + c) to end the terminal operation 
//  1
// setInterval(function(){
//         console.log(Math.random()*1000); 
// },2000);
//  2
// let i = 0;
// let x =setInterval(function(){
//     if(i==5){
//         clearInterval(x);
//     }else{
//     console.log(Math.random()*1000);
//     i++;}
// },200);
//  3
// let name = process.argv[2];
// console.log("Welcome "+name);
//  4
// const { stdin, stdout } = require("process");
// const readline = require("readline");
// const reader = readline.createInterface({
//     input:stdin,
//     output:stdout
// });
// reader.question("What are you: ",(cb) => {
//     console.log(cb);
// });
//  5
// let Task = ()=>{
//     return new Promise(() => {
//         setTimeout(() => {
//             console.log(Math.random()*100);
//             // let x1 = console.log("X1 "+Math.random);            
//         }, Math.random()*10000);
//     });
// }
// Task().then(console.log("NERD"));
// Task();
//  6 
// let Task = ()=>{
//     return new Promise((cb,er) => {
//         setTimeout(() => {
//             try{
//                 console.log(Math.random()*100);
//                 throw console.error("ERRRRRRRRR"); 
//             }catch(er){
//                 console.log("ErrorYaSa7by");
//             }       
//         }, Math.random()*10000);
//     });
// }
// Task().then(console.log("NERD"));
// Task().catch();

// Take this code for your final project


const express = require("express");
const bodyparser = require("body-parser");
const dbc = require("./DBControl")
const path = require("path");
const app = express();
app.use(bodyparser.json());
app.use("/Assets", express.static(__dirname + '/Assets'));

app.get("/Signup.html",function(req,res){
    res.sendFile(path.join(__dirname,"Signup.html"));
});
// Another way of inserting into the DB
// app.get("Signup.html",function(req,res){
//     res.sendFile(path.join(__dirname,"Signup.html"));
//     let userData={
//         "Email":req.query.Email,
//         "Password":req.query.Pass,
//         "Telphone":req.query.Tel,
//         "Credit":req.query.Crd,
//         "Date":req.query.d,
//         "Gender":req.query.Gender
//     };
//     ENC(userData.Password);
//     InsertData("Users",userData);
// });
app.post("/Signup.html",function(req,res){
    const da = req.body;
    dbc.InsertData("Users",da);
    res.json({
        message:"Posted From the body"
    });
});

app.put("/Signup.html/:id",function(req,res){
    const {id} = req.params;
    let {Email,Password,Telphone,Credit,Date,Gender} = req.body;
    dbc.Update("Users",id,{Email,Password,Telphone,Credit,Date,Gender});
    res.json({
        message:"Updates FROM THE BODY"
    });
});

app.get("/Signup.html/test",function(req,res){
    dbc.FindOne("Users",{Gender: 'male'});
    res.json({
        message:"Found FROM THE BODY"
    });
});

app.delete("/Signup.html/:id",function(req,res){
    const {id} = req.params;
    dbc.Delete("Users",id);
    res.json({
        message:"Delete Function from the DB Successed"
    });
});
app.listen(8000,() => {
    console.log("Server Started at http://localhost:8000/Signup.html");
});
// ENCRYPTION
const bcrypt = require("bcrypt");
function ENC(Password){
    return new Promise((resolve,reject)=>{
        bcrypt.hash(Password,10,(err,hash)=>{
            if(err){return reject(err);}
        resolve(hash);
        });
    });
};
// SIGNING IN PART
async function SIN(Email,Password){
    let us = CEM(Email);
    console.log(us);
    if (us.length == 0)
        return {status: false, message: "user not found"};
    Password = ENC(Password.toString());
    return dbc.InsertData("Users",{Email,Password});
};
async function CEM(Email){
    const user = find({Email:Email});
    return user.length > 0 ? false : true;
};
function Cp(Password){
    const user = dbc.Find("Users",{Password: Password});
}
app.get("/Signin.html",async function(req,res){
    const {Email,Password} = req.body;
    await SIN(Email,Password);
    res.json({
        message:"Signed In Successful WELCOME"
    });
});
