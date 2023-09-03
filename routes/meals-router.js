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
router.delete("/:id", (req, res) => {
	res.status(200).json({message: "meal delete route: " + req.params.id })
});

// MEAL UPDATE ROUTE
router.put("/:id", (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "meal update route: " + req.params.id })
});

module.exports = router

