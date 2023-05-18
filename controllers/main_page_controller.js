const Task=require('../models/task');
//this controller renders the main page
module.exports.page=function(req,res){

    Task.find({},function(err,tasks){
        if(err){
            console.log('error in fetching tasks from db');
            return;
        }
        //tasks contains all the task documents it fetched by using generic query above Task.find()
        res.render('main_page',{'tasks':tasks});
    })
    
}