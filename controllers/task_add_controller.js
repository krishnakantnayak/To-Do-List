const Task = require('../models/task');
//this controller adds user input data from client to db.
module.exports.add = function (req, res) {
    // Task.ceate() create the document by taking the req.body data
    Task.create({
        description: req.body.description,
        date: req.body.date.substring(0,10),
        category: req.body.category
    }, function (err, newTask) {
        if (err) { console.log('error in creating a new task'); return; }
        
        return res.redirect('back');
    });
}