///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Meal} = require('../models/meal')

///////////////////////////////
// CONTROLLERS
////////////////////////////////

// MEAL INDEX ACTION
async function index(req,res,next) {
	try {
    // get all meals
    res.json(await Meal.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// MEAL CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await Meal.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// MEAL SHOW ACTION
async function detail(req,res,next) {
    try {
        // send one person
        res.json(await Meal.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};

// ... the remaining people controller actions will go below 

// MEAL DESTROY ACTION 

// MEAL UPDATE ACTION


// EXPORT Controller Action
module.exports = {
	index,
	create,
	getOne: detail 
}