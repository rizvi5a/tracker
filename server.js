const express =require('express');
const logger =require('morgan');
const mongoose=require('mongoose');
const db = require('./seeders/workout');
const workout = db.model("workout");
const PORT = 3000;
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//routes
app.use(require('./routes/apiroutes'));
app.use(require('./routes/htmlroutes'));
// app.get("/workout", (req, res)=>{
//     workout.find ((err, data)=>{
//         res.send(data);
//     })
// });
// app.get("/test", (req, res)=>{
//    res.end("test");
// });
// app.post("/exercise/add", (req, res)=>{
//     const exercise = {
//         day: req.body.day,
//         exercises:[{
//         type: req.body.type,
//         name: req.body.name,
//         duration: req.body.duration,
//         weight: req.body.weight,
//         reps: req.body.reps,
//         sets:req.body.sets,
//       }]};

//       workout.create(exercise);
// });
// app.get("/view/weights" ,(req, res)=>{

// });
// app.get("/view/duration" ,(req, res)=>{
    
// });
app.listen(PORT, ()=>{
    console.log(`App running on ${PORT}!`)

});