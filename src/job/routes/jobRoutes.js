const { getAllJobs, addJobs, updateJobs, deleteJobs,search } = require("../controller/jobController");

const router=require("express").Router();

router.get("/jobs",getAllJobs);
router.post("/jobs",addJobs);
router.patch("/jobs/:id",updateJobs);
router.delete("/jobs/:id",deleteJobs);
router.post("/jobs/:searchName",search)

module.exports=router;