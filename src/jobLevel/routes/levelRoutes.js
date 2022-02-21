const { getAllLevels, addLevels, updateLevels, deleteLevels,search } = require("../controller/levelController");

const router=require("express").Router();

router.get("/levels",getAllLevels);
router.post("/Levels",addLevels);
router.patch("/Levels/:id",updateLevels);
router.delete("/Levels/:id",deleteLevels);
router.post("/Levels/:searchName",search);

module.exports=router;