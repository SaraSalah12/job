const {getAllResponsibilities} = require("../controller/responseController");

const router=require("express").Router();

router.get("/responsibilities",getAllResponsibilities);

module.exports=router;