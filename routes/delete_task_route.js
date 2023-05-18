const express=require('express');
const router=express.Router();
//this route is used for delete task controler
const task_delete_controller=require('../controllers/task_delete_controller')


router.post('/',task_delete_controller.delete);

module.exports=router;