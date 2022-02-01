const mongoose=require("mongoose");
const majorSchema=require("../schema/majorSchema");
const Major=mongoose.model("major",majorSchema);


module.exports=Major;