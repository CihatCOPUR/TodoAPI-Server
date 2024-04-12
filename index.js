'use strict'

//todo App

/*
    $ npm i express dotenv express-async-errors
    $ npm i mongoose
*/
const express = require("express");
const app = express();

app.use(express.json())


require('dotenv').config();

const PORT = process.env.PORT  || 8000
const HOST = process.env.HOST  || 8000

/* DB connection  */
require('./src/dbConnection') // dotenv çalıştıktan sonra 


// Route Connection
app.use('/',require("./src/routers/todoRouter"))

// errorHandler connection
require('./src/errorHandler')

app.listen(PORT, () => console.log(` Server Running on http://${HOST}:${PORT}`))