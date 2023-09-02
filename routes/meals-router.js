// ./routes/meal-router.js

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// MEAL INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "meal index route"})
});

// MEAL CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "meal create route"})
});

// MEAL SHOW ROUTE
router.get("/:id", (req, res) => {
	res.status(200).json({message: "meal show route: " + req.params.id })
});

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

