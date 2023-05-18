const express=require('express');
const router=express.Router();
//this route is used for add task controler
const task_add_controller=require('../controllers/task_add_controller');

router.post('/',task_add_controller.add);

module.exports=router;
