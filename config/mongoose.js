const mongoose=require('mongoose');
//db connection established by below code
mongoose.connect('mongodb://127.0.0.1:27017/todolist');
//mongoose.set('strictQuery', true)

const db=mongoose.connection;
//if fails to connect below code will notify the error 
db.on('error',function(err){console.log(err,'error is this whilst connecting to db')});
//once connection established successfully below msg shall printed on console.
db.once("open",function(){
    console.log("connection established");
})
