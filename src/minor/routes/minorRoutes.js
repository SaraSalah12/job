const { getAllMinor } = require("../controller/minorController");

const router=require("express").Router();

router.get("/minor",getAllMinor);

module.exports=router;