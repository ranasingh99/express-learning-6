// creating basic server 


const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { constants } = require("buffer");




const app = express();

app.use(bodyParser.urlencoded({extended:false}))

/* now creating first API
 REST API-> (Representational state Transfer) is an API that defines a set of functions that
 programmers can use to (SEND Request) and (RECEIVE Response) using the HTTP protocol methods
 such as GET and POST*/

app.get('/api/v1/userdata',(req,res)=>{
    res.json({
        username:"abc",
        email:"abc@gmail.com",
        Password:"Enigmatic332"
    });
}) 

app.post('/api/v1/registeruser',(req,res)=>{
    // now once user will click on register the details will be created and sent to api/v1/registeruser

    // by sending response user will get to know that he/she is registerd
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    // note once form will be submiited , these data will be sent to /api/v1/ru path
    // after that we will access it from body and in realtime api we create the userdetails 
    //in database and store the userinfo there for further use.

    // for now for our understanding we sending response of that data 

    res.json({
        name:userName,
        email:userEmail,
        password:userPassword
    })
})
app.listen(3000);