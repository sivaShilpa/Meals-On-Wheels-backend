///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

require('./config/db.connection.js');

const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

// import express
const express = require("express");

// create application object
const app = express();

// import meal router
const mealRouter = require('./routes/meals-router.js')

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies - this will run before our request accesses the meal router

app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development


// all requests for endpoints that begin with '/Menu'

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.use('/Menu', mealRouter)

//connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        app.listen(PORT, () => console.log(`connected to db & listening on PORT ${PORT}`));
    })
    .catch((error)=>{
        console.log(error)
    })
///////////////////////////////
// LISTENER
////////////////////////////////


