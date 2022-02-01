const mongoose=require("mongoose");
const eduSchema=require("../schema/educationSchema");
const Education=mongoose.model("education",eduSchema);


module.exports=Education;