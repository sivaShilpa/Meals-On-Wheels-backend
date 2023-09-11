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
    res.status(200).json(await Meal.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// MEAL CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.status(200).json(await Meal.create(req.body));
  
  } catch (error) {
    //send error
    res.status(400).json({error: error.message});
  }
};

// MEAL SHOW ACTION
async function detail(req,res,next) {
    try {
        // send one person
        res.status(200).json(await Meal.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};

// MEAL DESTROY ACTION 
async function destroy(req,res,next) {
  try {
    // delete meal by ID
    res.status(200).json(await Meal.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// MEAL UPDATE ACTION
async function update(req,res,next) {
  try {
    // update people by ID, provide the form data, and return the updated document.
    res.status(200).json(
      await Meal.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// EXPORT Controller Action
module.exports = {
	index,
	create,
	getOne: detail, 
  delete: destroy,
	update 
}