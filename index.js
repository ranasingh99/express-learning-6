// creating basic server 

const express = require("express");

const port = 3000;

const app = express();// basic server

app.listen(port,`server is listening at port ${port}`);