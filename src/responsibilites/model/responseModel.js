const mongoose=require("mongoose");
const responseSchema=require("../schema/responseSchema");
const Responsibility=mongoose.model("responsibility",responseSchema);


module.exports=Responsibility;