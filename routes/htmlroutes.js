var router = require("express").Router()
var path = require("path")

router.get("/", (req,res){
    res.sendFile(path.join(__dirname, "public/index.html"))
})
router.get("/stats", (req,res){
    res.sendFile(path.join(__dirname, "public/stats.html"))
})

router.get("/excerise", (req,res){
    res.sendFile(path.join(__dirname, "public/index.html"))
})

module.exports=router;