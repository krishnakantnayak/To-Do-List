const express=require('express');
const router=express.Router();
// this route file contains main page controller and everytime user hit '/' route we will be routing using this file
const main_page_controller=require('../controllers/main_page_controller.js');

router.get('/', main_page_controller.page);


//also we need to provide routes for different controllers mentioned below
router.use('/create-task',require('./add_task_route'));
router.use('/delete-task',require('./delete_task_route'));
module.exports=router;