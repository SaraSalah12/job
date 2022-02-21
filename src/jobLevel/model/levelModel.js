const mongoose=require("mongoose");
const levelSchema=require("../schema/levelSchema");
const Level=mongoose.model("level",levelSchema);


module.exports=Level;