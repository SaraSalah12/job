const mongoose=require("mongoose");
const softSchema=require("../schema/softSchema");
const SoftSkill=mongoose.model("softSkill",softSchema);


module.exports=SoftSkill;