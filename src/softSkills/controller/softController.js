const SoftSkill = require("../model/softModel")

const getAllSoftSkills= async(req,res)=>{
try{
const data= await SoftSkill.find({});
res.json({message:"success", data});
} catch(err){
    res.json({message:"error",err});
}
};
module.exports={getAllSoftSkills}