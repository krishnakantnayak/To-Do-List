const Task = require('../models/task');
//this controller deletes user selected data in db.
module.exports.delete = function(req,res){
// Task.findByIdAndDelete() delete the document by taking the ids from req.body data
    for(id of Object.keys(req.body)){
        Task.findByIdAndDelete(id, function(err){
            if(err){
                console.log('error in deleting document');
                return;
            }
        })
    }

    return res.redirect('back');
}