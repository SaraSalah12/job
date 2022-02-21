const {getAllTechnicalSkills, addTechnicalSkill, updateTechnicalSkill, deleteTechnicalSkill,search} = require("../controller/technicalController");

const router=require("express").Router();

router.get("/technicalSkill",getAllTechnicalSkills);
router.post("/technicalSkill",addTechnicalSkill);
router.put("/technicalSkill/:id",updateTechnicalSkill);
router.delete("/technicalSkill/:id",deleteTechnicalSkill);
router.post("/technicalSkill/:searchName",search);

module.exports=router;