const {getAllResponsibilities, addResponsibility, updateResponsibility, deleteResponsibility,search}
 = require("../controller/responseController");

const router=require("express").Router();

router.get("/responsibilities",getAllResponsibilities);
router.post("/responsibilities",addResponsibility);
router.put("/responsibilities/:id",updateResponsibility);
router.delete("/responsibilities/:id",deleteResponsibility);
router.post("/responsibilities/:searchName",search);

module.exports=router;