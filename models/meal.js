const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cookTime:{
        type: Number
    },
    tags:{
        type: String
    },
    nutrition:[{
        type: Number
    }],
    description: {
        type: String,
        required: true
    },
    ingredients: [{
        type: String
        
    }],
    n_ingredients:{
        type: Number
    },
    cuisine: {
        type: String,
        // TODO: add enum for each region or create lookup table
    },
    lifeStyle: {
        type: String
    },
    course:{
        type: String
    },
    image:{
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model("Meal", mealSchema);