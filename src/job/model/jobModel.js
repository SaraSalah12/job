const mongoose=require("mongoose");
const jobSchema=require("../schema/jobSchema");
const Job=mongoose.model("job",jobSchema);


module.exports=Job;