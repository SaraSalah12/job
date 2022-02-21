const { getAllMajor, addMajor, updateMajor, deleteMajor,search } = require("../controller/majorController");

const router=require("express").Router();

router.get("/major",getAllMajor);
router.post("/major",addMajor);
router.put("/major/:id",updateMajor);
router.delete("/major/:id",deleteMajor);
router.post("/major/:searchName",search);

module.exports=router;