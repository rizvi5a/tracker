var router = require("express").Router()
// const { Router } = require("express");
//var db=require("../models/fitness.js");
const Workout = require("../models/fitness.js")
 router.get("/api/fitness",(req,res) =>{
     db.find({})

//  router.get("/api/fitness",(req,res) =>{
//      db.find({})

    .then(savedrecords => {
        console.log("------",saveRecords)
        res.json(savedrecords)
    })
})



module.exports = router;
