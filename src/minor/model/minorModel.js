const mongoose=require("mongoose");
const minorSchema=require("../schema/minorSchema");
const Minor=mongoose.model("minor",minorSchema);


module.exports=Minor;