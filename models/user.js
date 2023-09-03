const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    savedMeals: [{
        type: Schema.Types.ObjectId,
        ref: "Meal",
        default: []
    }]
})

module.exports = mongoose.model("User", userSchema);