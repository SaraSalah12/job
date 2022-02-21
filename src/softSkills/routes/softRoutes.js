const {getAllSoftSkills, addSoftSkill, updateSoftSkill, deleteSoftSkill,search} = require("../controller/softController");

const router=require("express").Router();

router.get("/softSkill",getAllSoftSkills);
router.post("/softSkill",addSoftSkill);
router.put("/softSkill/:id",updateSoftSkill);
router.delete("/softSkill/:id",deleteSoftSkill);
router.post("/softSkill/:searchName",search);

module.exports=router;