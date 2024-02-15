// creating basic server 


const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();


// now use bodyparser middleware

app.use(bodyParser.urlencoded({extended:false}))


// get method = read operation (by using url we can read data)
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

// post methode = create opeartion (by using url we can send/create the data)
app.post('/api/v1/loginform',(req,res)=>{
    res.send('<h1>Done data is sent to the api</h1>')
    /*now accessing the data which is sent to the given url
    for that we will read body and for reading body we need body-parser*/
    console.log(req.body);
})
app.listen(3000);