const express=require('express')
const router=express.Router();
const dataController=require('../controller/dataController');


router.get('/data', dataController.getData);

module.exports=router;