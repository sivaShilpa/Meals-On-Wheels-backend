// ./routes/meal-router.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

const mealCtrl = require('../controllers/meals-controller') 

///////////////////////////////
// ROUTES
////////////////////////////////

// MEAL INDEX ROUTE
router.get("/", mealCtrl.index);

// MEAL CREATE ROUTE
router.post("/", mealCtrl.create);

// MEAL SHOW ROUTE
router.get("/:id", mealCtrl.getOne);

// MEAL DELETE ROUTE
router.delete("/:id", mealCtrl.delete);

// MEAL UPDATE ROUTE
router.put("/:id", mealCtrl.update);

module.exports = router

