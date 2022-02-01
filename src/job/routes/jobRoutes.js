const { getAllJobs } = require("../controller/jobController");

const router=require("express").Router();

router.get("/jobs",getAllJobs);


module.exports=router;