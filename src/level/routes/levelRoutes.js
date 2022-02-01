const { getAllLevels } = require("../controller/levelController");

const router=require("express").Router();

router.get("/levels",getAllLevels);

module.exports=router;