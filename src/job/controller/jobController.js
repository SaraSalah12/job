const Job = require("../model/jobModel")

const getAllJobs= async(req,res)=>{
try{
const data= await Job.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
module.exports={getAllJobs
}