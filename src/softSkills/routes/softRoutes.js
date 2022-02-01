const {getAllSoftSkills} = require("../controller/softController");

const router=require("express").Router();

router.get("/softSkill",getAllSoftSkills);

module.exports=router;