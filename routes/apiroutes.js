var router = require("express").Router()
const db = require("../models/fitness.js")


 router.get("/api/workouts",(req,res) =>{
     db.find({})
     .then(savedRecords => {
        console.log("----Get Route--",savedRecords)
        res.json(savedRecords)
    })
})

router.put("/api/workouts/:id",(req,res) =>{
    db.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}},{new:true})
    .then(savedRecords => {
       console.log("----PUT Route--",savedRecords)
       res.json(savedRecords)
   })
})

router.post("/api/workouts",(req,res) =>{
    db.create(req.body)
    .then(savedRecords => {
       console.log("----post Route--",savedRecords)
       res.json(savedRecords)
   })
})

router.get("/api/workouts/range",(req,res) =>{
    db.find({}).limit(7)
    .then(savedRecords => {
       console.log("----Get Route--",savedRecords)
       res.json(savedRecords) 
   })
})



module.exports = router;
