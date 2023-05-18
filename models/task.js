const mongoose=require('mongoose');
//this is the db schema we will be using to create documents in mongodb by using mongoose
const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean
    }
});

const Task=mongoose.model('Task',taskSchema);

module.exports=Task;