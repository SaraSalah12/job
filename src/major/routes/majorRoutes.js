const { getAllMajor } = require("../controller/majorController");

const router=require("express").Router();

router.get("/major",getAllMajor);

module.exports=router;