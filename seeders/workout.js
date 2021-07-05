const mongoose = require('mongoose');
var Schema= mongoose.Schema;

var workoutSchema ={
    day : Date,
    exercises: {}
}

module.exports=mongoose.model("workout", workoutSchema);