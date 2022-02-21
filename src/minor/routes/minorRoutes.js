const { getAllMinor, addMinor, updateMinor, deleteMinor,search } = require("../controller/minorController");

const router=require("express").Router();

router.get("/minor",getAllMinor);
router.post("/minor",addMinor);
router.patch("/minor/:id",updateMinor);
router.delete("/minor/:id",deleteMinor);
router.delete("/minor/:searchName",search);

module.exports=router;