const mongoose=require("mongoose");
const technicalSchema=require("../schema/technicalSchema");
const TechnicalSkill=mongoose.model("technicalSkill",technicalSchema);


module.exports=TechnicalSkill;