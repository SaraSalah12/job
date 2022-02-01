const {getAllTechnicalSkills} = require("../controller/technicalController");

const router=require("express").Router();

router.get("/technicalSkill",getAllTechnicalSkills);

module.exports=router;