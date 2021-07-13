const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExceriseSchema = new Schema({
    excercises:[
        {

            type: {
                type: String,
                trim: true,
                required: "Exercise type is required"
            },

            name: {
                type: String,
                trim: true,
                required: "Enter a name "
            },


            duration: {
                type: Number,
                trim: true
            },


            weight: {
                type: Number,
                required: "Enter an amount"
            },

            reps: {
                type: Number,
                required: "Enter an amount"
            },
            sets: {
                type: Number,
                required: "Enter an amount"
            },
        }]

});

const Workout  = mongoose.model("Workout", ExceriseSchema);

module.exports = Workout;
