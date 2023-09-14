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
    },
    ingredients: [{
        type: String
        
    }],
    n_ingredients:{
        type: Number
    },
    cuisine: {
        type: String,
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