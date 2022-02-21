const { getAllEducation, updateEducation, addEducation, deleteEducation,search } 
= require("../controller/educationController");

const router=require("express").Router();

router.get("/education",getAllEducation);
router.post("/education",addEducation);
router.put("/education/:id",updateEducation);
router.delete("/education/:id",deleteEducation);
router.delete("/education/:searchName",search);

module.exports=router;