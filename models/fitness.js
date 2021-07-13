const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExceriseSchema = new Schema({
    exercises:[
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
            distance:{
                type: Number
            },

            duration: {
                type: Number
              
            },


            weight: {
                type: Number
            
            },

            reps: {
                type: Number
                
            },
            sets: {
                type: Number
                
            },
        }],
        day:{
            type:Date,
            default:Date.now()
        }

});

const Workout  = mongoose.model("Workout", ExceriseSchema);

module.exports = Workout;
