// creating basic server 

const express = require("express");
const path = require("path");


const app = express();

// get method = read operation (by using url we can read data)
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

// post methode = create opeartion (by using url we can send/create the data)
// app.post('api/v1/rana',(req,res)=>{
//     //req.body -- we can send the data whatever we have filled
   
// })
app.listen(3000);