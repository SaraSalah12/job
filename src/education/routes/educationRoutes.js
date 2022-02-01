const { getAllEducation } = require("../controller/educationController");

const router=require("express").Router();

router.get("/education",getAllEducation);

module.exports=router;